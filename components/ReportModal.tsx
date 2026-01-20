
import React, { useState } from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextInfo: string;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, contextInfo }) => {
  const [reportType, setReportType] = useState('Translation Error');
  const [severity, setSeverity] = useState('Medium');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`[StudyApp Report] ${severity} - ${reportType}`);
    const body = encodeURIComponent(
      `--- ERROR REPORT ---\n` +
      `Context: ${contextInfo}\n` +
      `Category: ${reportType}\n` +
      `Severity: ${severity}\n` +
      `Comments: ${comment}\n\n` +
      `System info: ${navigator.userAgent}`
    );
    
    // Trigger mail client
    window.location.href = `mailto:admin@example.com?subject=${subject}&body=${body}`;
    
    // Simulate short delay for UX then show success
    setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
    }, 800);
  };

  const severityOptions = ['Low', 'Medium', 'High'];

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-lg p-8 space-y-6 bg-neumorphic-bg rounded-3xl shadow-2xl border border-white/10">
        {!submitted ? (
          <>
            <div className="space-y-1">
                <h2 className="text-2xl font-black text-slate-700 tracking-tight">Report Content Issue</h2>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 w-fit px-2 py-0.5 rounded">
                    <span>Context:</span>
                    <span className="text-slate-600 truncate max-w-[200px]">{contextInfo}</span>
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Category</label>
                    <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-xl px-2">
                        <select 
                            value={reportType} 
                            onChange={(e) => setReportType(e.target.value)}
                            className="w-full bg-transparent border-none outline-none p-3 text-sm text-slate-700 appearance-none font-medium"
                        >
                            <option>Translation Error</option>
                            <option>Audio/TTS Issue</option>
                            <option>Inaccurate Explanation</option>
                            <option>Technical Bug</option>
                            <option>Typo/Spelling</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Severity</label>
                    <div className="flex bg-neumorphic-bg shadow-neumorphic-inset rounded-xl p-1">
                        {severityOptions.map(opt => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => setSeverity(opt)}
                                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                                    severity === opt 
                                    ? 'bg-white shadow-sm text-blue-600' 
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Describe the error</label>
                <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-xl">
                    <textarea 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Please provide details (e.g., 'The reading should be...')"
                        className="w-full bg-transparent border-none outline-none p-4 text-sm text-slate-700 min-h-[120px] resize-none placeholder-slate-400"
                        required
                    />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                    type="button" 
                    onClick={onClose} 
                    className="flex-1 px-6 py-3.5 text-sm font-bold text-slate-500 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
                >
                    Cancel
                </button>
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-[2] px-6 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50"
                >
                    {isSubmitting ? 'Opening Email Client...' : 'Send Report'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-10 space-y-6 animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-700">Thank You!</h3>
                <p className="text-slate-500 px-4">Your feedback helps improve the study materials for everyone. If your email didn't open, please email us directly.</p>
            </div>
            <button 
                onClick={onClose} 
                className="w-full max-w-[200px] px-8 py-3.5 text-sm font-bold text-blue-600 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset"
            >
                Return to App
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportModal;
