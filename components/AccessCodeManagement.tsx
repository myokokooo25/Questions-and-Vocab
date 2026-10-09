import React, { useState, useEffect, useMemo } from 'react';
import { 
  KeyIcon, 
  UsersIcon, 
  SmartphoneIcon, 
  RefreshIcon, 
  PlusIcon, 
  SearchIcon, 
  TrashIcon, 
  PencilIcon, 
  CheckIcon, 
  XIcon, 
  LoadingSpinnerIcon,
  CheckCircleSolidIcon,
  SparkleIcon
} from './Icons';

export interface AccessCodeRecord {
  id: number;
  created_at: string;
  code: string;
  is_active: boolean;
  memo?: string | null;
  type?: 'permanent' | 'trial' | string;
  device_ids: string[];
  first_used_at?: string | null;
  user_name?: string | null;
  Username?: string | null;
}

interface AccessCodeManagementProps {
  adminToken: string;
}

export const AccessCodeManagement: React.FC<AccessCodeManagementProps> = ({ adminToken }) => {
  const [codes, setCodes] = useState<AccessCodeRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [successToast, setSuccessToast] = useState<string>('');

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive' | 'with_devices'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'code' | 'devices'>('newest');

  // Add Modal State
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newCode, setNewCode] = useState<string>('');
  const [newUserName, setNewUserName] = useState<string>('');
  const [newMemo, setNewMemo] = useState<string>('Permanent Key');
  const [newType, setNewType] = useState<'permanent' | 'trial'>('permanent');
  const [newIsActive, setNewIsActive] = useState<boolean>(true);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [addError, setAddError] = useState<string>('');

  // Inline Editing Username
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingUserName, setEditingUserName] = useState<string>('');
  const [isSavingEdit, setIsSavingEdit] = useState<boolean>(false);

  // View & Manage Devices Modal
  const [selectedCodeForDevices, setSelectedCodeForDevices] = useState<AccessCodeRecord | null>(null);
  const [isResettingDevices, setIsResettingDevices] = useState<boolean>(false);

  // Delete Confirmation Modal
  const [codeToDelete, setCodeToDelete] = useState<AccessCodeRecord | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Copied code feedback
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => {
      setSuccessToast('');
    }, 3500);
  };

  const fetchAccessCodes = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/access-codes', {
        headers: {
          'x-admin-token': adminToken
        }
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch access codes');
      }
      setCodes(data.codes || []);
    } catch (err: any) {
      console.error('Error fetching access codes:', err);
      setError(err.message || 'Error fetching access codes');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (adminToken) {
      fetchAccessCodes();
    }
  }, [adminToken]);

  // Helper to generate a random uppercase key
  const handleGenerateRandomKey = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setNewCode(result);
  };

  // Create New Access Code
  const handleCreateCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode.trim()) {
      setAddError('Access Code ကို ရိုက်ထည့်ပေးပါခင်ဗျာ');
      return;
    }

    setIsAdding(true);
    setAddError('');

    try {
      const res = await fetch('/api/admin/access-codes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify({
          code: newCode.trim().toUpperCase(),
          user_name: newUserName.trim() || null,
          memo: newMemo.trim() || 'Permanent Key',
          type: newType,
          is_active: newIsActive
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create code');
      }

      showToast(`Access Code "${data.code?.code}" ကို အောင်မြင်စွာ ထည့်သွင်းပြီးပါပြီ!`);
      setShowAddModal(false);
      setNewCode('');
      setNewUserName('');
      setNewMemo('Permanent Key');
      setNewType('permanent');
      setNewIsActive(true);
      fetchAccessCodes();
    } catch (err: any) {
      setAddError(err.message || 'Failed to create access code');
    } finally {
      setIsAdding(false);
    }
  };

  // Inline Save Username
  const handleSaveUserName = async (id: number) => {
    if (isSavingEdit) return;
    setIsSavingEdit(true);
    try {
      const res = await fetch(`/api/admin/access-codes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify({
          user_name: editingUserName.trim() || null
        })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update username');
      }

      setCodes(prev => prev.map(c => c.id === id ? { ...c, user_name: editingUserName.trim(), Username: editingUserName.trim() } : c));
      setEditingId(null);
      showToast('Username ကို အောင်မြင်စွာ ပြင်ဆင်ပြီးပါပြီ!');
    } catch (err: any) {
      alert(`Update Error: ${err.message}`);
    } finally {
      setIsSavingEdit(false);
    }
  };

  // Toggle is_active
  const handleToggleActive = async (codeItem: AccessCodeRecord) => {
    const nextStatus = !codeItem.is_active;
    try {
      const res = await fetch(`/api/admin/access-codes/${codeItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify({
          is_active: nextStatus
        })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update status');
      }

      setCodes(prev => prev.map(c => c.id === codeItem.id ? { ...c, is_active: nextStatus } : c));
      showToast(`Key "${codeItem.code}" ကို ${nextStatus ? 'ဖွင့် (Activated)' : 'ပိတ် (Deactivated)'} ထားပြီးပါပြီ`);
    } catch (err: any) {
      alert(`Status update error: ${err.message}`);
    }
  };

  // Reset Devices (Clear device history)
  const handleResetDevices = async (codeItem: AccessCodeRecord) => {
    if (isResettingDevices) return;
    if (!window.confirm(`"${codeItem.code}" (${codeItem.user_name || codeItem.Username || 'No Name'}) ၏ ချိတ်ဆက်ထားသော Device အားလုံးကို ရှင်းလင်း (Reset) မည်မှာ သေချာပါသလားခင်ဗျာ?`)) {
      return;
    }

    setIsResettingDevices(true);
    try {
      const res = await fetch(`/api/admin/access-codes/${codeItem.id}/reset-devices`, {
        method: 'POST',
        headers: {
          'x-admin-token': adminToken
        }
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to reset devices');
      }

      setCodes(prev => prev.map(c => c.id === codeItem.id ? { ...c, device_ids: [] } : c));
      if (selectedCodeForDevices?.id === codeItem.id) {
        setSelectedCodeForDevices(prev => prev ? { ...prev, device_ids: [] } : null);
      }
      showToast(`Key "${codeItem.code}" ၏ Device IDs အားလုံးကို ရှင်းလင်းပြီးပါပြီ (User အသစ်ပြန်ဝင်နိုင်ပါသည်)`);
    } catch (err: any) {
      alert(`Reset error: ${err.message}`);
    } finally {
      setIsResettingDevices(false);
    }
  };

  // Remove Single Device ID
  const handleRemoveSingleDevice = async (codeId: number, deviceId: string) => {
    try {
      const res = await fetch(`/api/admin/access-codes/${codeId}/remove-device`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify({ deviceId })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to remove device');
      }

      setCodes(prev => prev.map(c => c.id === codeId ? { ...c, device_ids: c.device_ids.filter(d => d !== deviceId) } : c));
      if (selectedCodeForDevices?.id === codeId) {
        setSelectedCodeForDevices(prev => prev ? { ...prev, device_ids: prev.device_ids.filter(d => d !== deviceId) } : null);
      }
      showToast('Device ID ကို ဖယ်ရှားပြီးပါပြီ');
    } catch (err: any) {
      alert(`Remove error: ${err.message}`);
    }
  };

  // Delete Access Code
  const handleDeleteCode = async () => {
    if (!codeToDelete || isDeleting) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/admin/access-codes/${codeToDelete.id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-token': adminToken
        }
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to delete access code');
      }

      setCodes(prev => prev.filter(c => c.id !== codeToDelete.id));
      showToast(`Access Code "${codeToDelete.code}" ကို ဖျက်ပြီးပါပြီ`);
      setCodeToDelete(null);
    } catch (err: any) {
      alert(`Delete error: ${err.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  // Copy to clipboard
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  // Filtered & Sorted codes
  const filteredCodes = useMemo(() => {
    return codes
      .filter(item => {
        const query = searchQuery.trim().toLowerCase();
        const matchesQuery = !query || 
          item.code.toLowerCase().includes(query) ||
          (item.user_name && item.user_name.toLowerCase().includes(query)) ||
          (item.Username && item.Username.toLowerCase().includes(query)) ||
          (item.memo && item.memo.toLowerCase().includes(query));

        if (!matchesQuery) return false;

        if (filterStatus === 'active') return item.is_active;
        if (filterStatus === 'inactive') return !item.is_active;
        if (filterStatus === 'with_devices') return item.device_ids && item.device_ids.length > 0;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') return b.id - a.id;
        if (sortBy === 'oldest') return a.id - b.id;
        if (sortBy === 'code') return a.code.localeCompare(b.code);
        if (sortBy === 'devices') return (b.device_ids?.length || 0) - (a.device_ids?.length || 0);
        return 0;
      });
  }, [codes, searchQuery, filterStatus, sortBy]);

  // Statistics
  const stats = useMemo(() => {
    const total = codes.length;
    const active = codes.filter(c => c.is_active).length;
    const inactive = total - active;
    const withDevices = codes.filter(c => c.device_ids && c.device_ids.length > 0).length;
    const totalDevicesConnected = codes.reduce((sum, c) => sum + (c.device_ids?.length || 0), 0);
    return { total, active, inactive, withDevices, totalDevicesConnected };
  }, [codes]);

  const getDeviceLimit = (code: string) => {
    if (code === 'MANOEL' || code === 'ADMIN') return 'Unlimited';
    if (code.startsWith('CHANSU14-') || code === 'BESTFRIEND') return '20';
    return '3';
  };

  return (
    <div className="bg-slate-900/60 p-5 sm:p-7 rounded-3xl border border-slate-700/80 space-y-6">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-400 animate-in slide-in-from-top-5 duration-300">
          <CheckCircleSolidIcon className="w-5 h-5 text-white shrink-0" />
          <span className="text-sm font-semibold">{successToast}</span>
        </div>
      )}

      {/* Top Title & Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-5 border-b border-slate-700/60">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <KeyIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-100 flex items-center gap-2">
                Supabase Access Codes & Device Manager
                <span className="text-[11px] bg-purple-500/20 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/30 font-mono">
                  {stats.total} Keys
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Access Code အသစ်ထည့်ခြင်း၊ Device History ဖျက်ခြင်း (Reset) နှင့် Username ပြင်ဆင်ခြင်း
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap w-full md:w-auto">
          <button
            onClick={() => {
              setAddError('');
              setNewCode('');
              setNewUserName('');
              setNewMemo('Permanent Key');
              setShowAddModal(true);
            }}
            className="flex-1 sm:flex-initial px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all text-xs flex items-center justify-center gap-2 active:scale-95"
          >
            <PlusIcon className="w-4 h-4" />
            <span>Add New Key</span>
          </button>

          <button
            onClick={fetchAccessCodes}
            disabled={isLoading}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all border border-slate-700/80 active:scale-95 disabled:opacity-50"
            title="Refresh from Supabase"
          >
            <RefreshIcon className={`w-4 h-4 ${isLoading ? 'animate-spin text-purple-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Access Codes</p>
          <p className="text-2xl font-black text-slate-100 mt-1">{stats.total}</p>
        </div>
        <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
          <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Active Keys</p>
          <p className="text-2xl font-black text-emerald-400 mt-1">{stats.active}</p>
        </div>
        <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Inactive / Disabled</p>
          <p className="text-2xl font-black text-slate-400 mt-1">{stats.inactive}</p>
        </div>
        <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
          <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Connected Devices</p>
          <p className="text-2xl font-black text-blue-400 mt-1">
            {stats.totalDevicesConnected}
            <span className="text-xs font-normal text-slate-400 ml-1.5">({stats.withDevices} users)</span>
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1">
          <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Code, Username, or Memo..."
            className="w-full pl-10 pr-4 py-2 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder-slate-400 outline-none focus:ring-2 focus:ring-purple-500/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs"
            >
              <XIcon className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={filterStatus}
            onChange={(e: any) => setFilterStatus(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-xl px-3 py-2 outline-none focus:ring-1 focus:ring-purple-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
            <option value="with_devices">Connected (1+ devices)</option>
          </select>

          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-xl px-3 py-2 outline-none focus:ring-1 focus:ring-purple-500"
          >
            <option value="newest">Sort: Newest First</option>
            <option value="oldest">Sort: Oldest First</option>
            <option value="code">Sort: Code (A-Z)</option>
            <option value="devices">Sort: Most Devices</option>
          </select>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="p-4 bg-red-950/40 border border-red-500/40 rounded-2xl text-red-300 text-xs flex items-center justify-between">
          <span>⚠️ {error}</span>
          <button onClick={fetchAccessCodes} className="underline text-red-200 hover:text-white font-bold ml-2">
            Retry
          </button>
        </div>
      )}

      {/* Access Codes Table */}
      <div className="bg-slate-950/40 rounded-2xl border border-slate-800 overflow-hidden">
        {isLoading && codes.length === 0 ? (
          <div className="p-12 text-center text-slate-400 space-y-3">
            <LoadingSpinnerIcon className="w-8 h-8 mx-auto text-purple-400 animate-spin" />
            <p className="text-sm">Supabase မှ Access Codes များ ရယူနေပါသည်...</p>
          </div>
        ) : filteredCodes.length === 0 ? (
          <div className="p-12 text-center text-slate-400 space-y-2">
            <KeyIcon className="w-8 h-8 mx-auto text-slate-600" />
            <p className="text-sm font-semibold">ရှာဖွေမှုနှင့် ကိုက်ညီသော Access Code မရှိပါခင်ဗျာ</p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-purple-400 hover:underline font-bold"
              >
                Clear Search Filter
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-800/90 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-700/60">
                <tr>
                  <th className="p-3.5 pl-4">Access Code</th>
                  <th className="p-3.5">Username (User)</th>
                  <th className="p-3.5">Type / Note</th>
                  <th className="p-3.5">Connected Devices</th>
                  <th className="p-3.5 text-center">Status</th>
                  <th className="p-3.5 pr-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {filteredCodes.map((item) => {
                  const displayName = item.user_name || item.Username || '';
                  const devices = item.device_ids || [];
                  const limit = getDeviceLimit(item.code);
                  const isEditingThis = editingId === item.id;
                  const isOverLimit = limit !== 'Unlimited' && devices.length >= parseInt(limit, 10);

                  return (
                    <tr 
                      key={item.id} 
                      className={`hover:bg-slate-800/40 transition-colors ${!item.is_active ? 'opacity-60 bg-slate-900/40' : ''}`}
                    >
                      {/* Code Column */}
                      <td className="p-3.5 pl-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-sm text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded-lg border border-purple-500/20">
                            {item.code}
                          </span>
                          <button
                            onClick={() => handleCopyCode(item.code)}
                            className="text-slate-400 hover:text-purple-300 transition-colors p-1"
                            title="Copy Code"
                          >
                            {copiedCode === item.code ? (
                              <span className="text-[10px] text-emerald-400 font-bold">Copied!</span>
                            ) : (
                              <span className="text-[11px] opacity-70 hover:opacity-100">📋</span>
                            )}
                          </button>
                        </div>
                      </td>

                      {/* Username Column (Inline editable) */}
                      <td className="p-3.5 min-w-[180px]">
                        {isEditingThis ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              value={editingUserName}
                              onChange={(e) => setEditingUserName(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSaveUserName(item.id);
                                if (e.key === 'Escape') setEditingId(null);
                              }}
                              autoFocus
                              className="px-2 py-1 bg-slate-900 border border-purple-500 rounded-lg text-xs text-white outline-none w-full font-medium"
                              placeholder="Enter username"
                            />
                            <button
                              onClick={() => handleSaveUserName(item.id)}
                              disabled={isSavingEdit}
                              className="p-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition-colors"
                              title="Save Username"
                            >
                              <CheckIcon className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="p-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-md transition-colors"
                              title="Cancel"
                            >
                              <XIcon className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 group">
                            <span className="font-semibold text-slate-200">
                              {displayName || <span className="text-slate-500 italic">No name assigned</span>}
                            </span>
                            <button
                              onClick={() => {
                                setEditingId(item.id);
                                setEditingUserName(displayName);
                              }}
                              className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-purple-300 transition-opacity p-0.5"
                              title="Edit Username"
                            >
                              <PencilIcon className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </td>

                      {/* Type & Memo Column */}
                      <td className="p-3.5">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[11px] font-bold text-slate-300 uppercase">
                            {item.type || 'permanent'}
                          </span>
                          {item.memo && (
                            <span className="text-[10px] text-slate-500 truncate max-w-[150px]" title={item.memo}>
                              {item.memo}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Connected Devices Column */}
                      <td className="p-3.5">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedCodeForDevices(item)}
                            className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                              devices.length === 0
                                ? 'bg-slate-800 text-slate-400 hover:bg-slate-750'
                                : isOverLimit
                                ? 'bg-amber-950/60 border border-amber-500/40 text-amber-300 hover:bg-amber-900/60'
                                : 'bg-blue-950/60 border border-blue-500/30 text-blue-300 hover:bg-blue-900/60'
                            }`}
                            title="Click to view & manage device IDs"
                          >
                            <SmartphoneIcon className="w-3.5 h-3.5" />
                            <span>{devices.length} / {limit}</span>
                          </button>

                          {/* Reset Devices Button (Device history ဖျက်ခြင်း) */}
                          {devices.length > 0 && (
                            <button
                              onClick={() => handleResetDevices(item)}
                              disabled={isResettingDevices}
                              className="px-2 py-1 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/30 text-rose-300 text-[11px] font-bold transition-all active:scale-95 flex items-center gap-1"
                              title="Reset / Clear all connected devices for this key"
                            >
                              <RefreshIcon className="w-3 h-3" />
                              <span>Reset</span>
                            </button>
                          )}
                        </div>
                      </td>

                      {/* Active Status Column */}
                      <td className="p-3.5 text-center">
                        <button
                          onClick={() => handleToggleActive(item)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border ${
                            item.is_active
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30'
                              : 'bg-slate-700 text-slate-400 border-slate-600 hover:bg-slate-650'
                          }`}
                          title="Click to Toggle Active/Inactive"
                        >
                          {item.is_active ? 'Active' : 'Disabled'}
                        </button>
                      </td>

                      {/* Actions Column */}
                      <td className="p-3.5 pr-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => {
                              setEditingId(item.id);
                              setEditingUserName(displayName);
                            }}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all"
                            title="Edit Username"
                          >
                            <PencilIcon className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setCodeToDelete(item)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-400 transition-all"
                            title="Delete Access Code"
                          >
                            <TrashIcon className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* --- MODAL 1: ADD NEW ACCESS CODE --- */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-7 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                  <PlusIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Add New Access Code</h4>
                  <p className="text-xs text-slate-400">Supabase ထဲသို့ Access Code အသစ်ထည့်သွင်းခြင်း</p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCode} className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Access Code *
                  </label>
                  <button
                    type="button"
                    onClick={handleGenerateRandomKey}
                    className="text-[11px] text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1"
                  >
                    <SparkleIcon className="w-3 h-3" />
                    <span>Generate Random</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value.toUpperCase())}
                  placeholder="e.g. STUDENT-2026 or 9X8Y7Z"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono text-sm uppercase tracking-wider outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Username (အသုံးပြုသူ အမည်)
                </label>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  placeholder="e.g. Kyaw Kyaw"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Type
                  </label>
                  <select
                    value={newType}
                    onChange={(e: any) => setNewType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="permanent">Permanent (3 Devices)</option>
                    <option value="trial">Trial (15 Minutes)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Status
                  </label>
                  <select
                    value={newIsActive ? 'active' : 'inactive'}
                    onChange={(e) => setNewIsActive(e.target.value === 'active')}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="active">Active (ဖွင့်မည်)</option>
                    <option value="inactive">Disabled (ပိတ်ထားမည်)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Memo / Note
                </label>
                <input
                  type="text"
                  value={newMemo}
                  onChange={(e) => setNewMemo(e.target.value)}
                  placeholder="e.g. Batch 2026 Student / VIP"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {addError && (
                <p className="text-xs text-rose-400 font-semibold mt-2">
                  ⚠️ {addError}
                </p>
              )}

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 font-bold text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAdding || !newCode.trim()}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isAdding ? (
                    <>
                      <LoadingSpinnerIcon className="w-4 h-4 animate-spin" />
                      <span>Creating...</span>
                    </>
                  ) : (
                    <span>Create Key</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL 2: VIEW & MANAGE CONNECTED DEVICES --- */}
      {selectedCodeForDevices && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl max-w-lg w-full p-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                  <SmartphoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    Connected Devices
                    <span className="font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded-md text-xs">
                      {selectedCodeForDevices.code}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400">
                    User: {selectedCodeForDevices.user_name || selectedCodeForDevices.Username || 'No Name'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCodeForDevices(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span>
                  Connected: <strong className="text-white">{selectedCodeForDevices.device_ids?.length || 0}</strong> Devices (Limit: {getDeviceLimit(selectedCodeForDevices.code)})
                </span>
                {selectedCodeForDevices.device_ids?.length > 0 && (
                  <button
                    onClick={() => handleResetDevices(selectedCodeForDevices)}
                    disabled={isResettingDevices}
                    className="text-rose-400 hover:text-rose-300 font-bold underline"
                  >
                    Clear All Devices (Reset)
                  </button>
                )}
              </div>

              <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {(!selectedCodeForDevices.device_ids || selectedCodeForDevices.device_ids.length === 0) ? (
                  <div className="p-8 text-center text-slate-500 border border-dashed border-slate-800 rounded-2xl">
                    <p className="text-xs">ချိတ်ဆက်ထားသော Device မရှိသေးပါခင်ဗျာ</p>
                    <p className="text-[11px] text-slate-600 mt-1">User က App ထဲသို့ ဝင်ရောက်ချိန်တွင် Device ID အလိုအလျောက် ပေါ်လာမည်ဖြစ်ပါသည်</p>
                  </div>
                ) : (
                  selectedCodeForDevices.device_ids.map((devId, idx) => (
                    <div
                      key={devId}
                      className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className="w-5 h-5 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-mono text-slate-300 truncate text-[11px]" title={devId}>
                          {devId}
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveSingleDevice(selectedCodeForDevices.id, devId)}
                        className="px-2 py-1 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 rounded-lg font-bold text-[10px] shrink-0 border border-rose-500/20"
                        title="Remove this device"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 mt-5 flex justify-end">
              <button
                onClick={() => setSelectedCodeForDevices(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 3: DELETE CONFIRMATION --- */}
      {codeToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-rose-500/30 rounded-3xl shadow-2xl max-w-sm w-full p-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 text-rose-400 mb-4">
              <div className="p-3 rounded-2xl bg-rose-500/20 text-rose-400">
                <TrashIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Delete Access Code</h4>
                <p className="text-xs text-slate-400">ဤ Code ကို အပြီးတိုင် ဖျက်မည်လား?</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Access Code <strong className="text-rose-400 font-mono">"{codeToDelete.code}"</strong> ({codeToDelete.user_name || codeToDelete.Username || 'No Name'}) ကို ဖျက်လိုက်ပါက ဤ Code ဖြင့် ဝင်ရောက်ထားသော User သည် App ကို ဆက်လက် အသုံးပြုနိုင်တော့မည် မဟုတ်ပါ။
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setCodeToDelete(null)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 font-bold text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteCode}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <LoadingSpinnerIcon className="w-4 h-4 animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Yes, Delete</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
