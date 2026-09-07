import React from 'react';
import {
  LogOut,
  Building2,
  ChevronDown,
  Bookmark,
  Search,
  BookOpen,
  Pencil,
  Volume2,
  Globe,
  RotateCw,
  Sparkles,
  GraduationCap,
  Lightbulb,
  Flag,
  Users,
  Trash2,
  Clock,
  ChevronLeft,
  List,
  CheckCircle2,
  XCircle,
  Bell,
  Sun,
  Moon,
  Info,
  Type,
  Folder,
  Menu,
  Scale,
  Calculator,
  Flame,
  Zap,
  Contrast
} from 'lucide-react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LogoutIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <LogOut className={className} strokeWidth={2} {...(props as any)} />
);

export const LogoIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <Building2 className={className} strokeWidth={2} {...(props as any)} />
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <ChevronDown className={className} strokeWidth={2} {...(props as any)} />
);

export const BookmarkIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Bookmark className={className} strokeWidth={2} {...(props as any)} />
);

export const BookmarkSolidIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Bookmark className={className} fill="currentColor" strokeWidth={2} {...(props as any)} />
);

export const SearchIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Search className={className} strokeWidth={2} {...(props as any)} />
);

export const BookOpenIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <BookOpen className={className} strokeWidth={2} {...(props as any)} />
);

export const PencilIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Pencil className={className} strokeWidth={2} {...(props as any)} />
);

export const SpeakerIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Volume2 className={className} strokeWidth={2} {...(props as any)} />
);

export const LoadingSpinnerIcon: React.FC<IconProps> = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={`animate-spin ${className}`}
    {...props}
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Globe className={className} strokeWidth={2} {...(props as any)} />
);

// High-precision, clean, non-deformed Refresh icon
export const RefreshIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <RotateCw className={className} strokeWidth={2} {...(props as any)} />
);

export const SparkleIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Sparkles className={className} strokeWidth={2} {...(props as any)} />
);

export const AcademicCapIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <GraduationCap className={className} strokeWidth={2} {...(props as any)} />
);

export const LightBulbIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Lightbulb className={className} strokeWidth={2} {...(props as any)} />
);

export const FlagIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Flag className={className} strokeWidth={2} {...(props as any)} />
);

export const UsersIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Users className={className} strokeWidth={2} {...(props as any)} />
);

export const TrashIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Trash2 className={className} strokeWidth={2} {...(props as any)} />
);

export const ClockIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Clock className={className} strokeWidth={2} {...(props as any)} />
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <ChevronLeft className={className} strokeWidth={2} {...(props as any)} />
);

export const ListBulletIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <List className={className} strokeWidth={2} {...(props as any)} />
);

export const CheckCircleSolidIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <CheckCircle2 className={className} fill="currentColor" strokeWidth={2} {...(props as any)} />
);

export const XCircleSolidIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <XCircle className={className} fill="currentColor" strokeWidth={2} {...(props as any)} />
);

export const BellIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Bell className={className} strokeWidth={2} {...(props as any)} />
);

export const SunIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Sun className={className} strokeWidth={2} {...(props as any)} />
);

export const MoonIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Moon className={className} strokeWidth={2} {...(props as any)} />
);

export const InfoIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Info className={className} strokeWidth={2} {...(props as any)} />
);

export const TextSizeIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Type className={className} strokeWidth={2} {...(props as any)} />
);

// High-precision, clean, non-deformed Folder icon
export const FolderIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <Folder className={className} strokeWidth={2} {...(props as any)} />
);

export const MenuIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <Menu className={className} strokeWidth={2} {...(props as any)} />
);

// High-precision, clean, non-deformed Balance Scale icon for Cheat Sheet
export const ScaleIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <Scale className={className} strokeWidth={2} {...(props as any)} />
);

export const CalculatorIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <Calculator className={className} strokeWidth={2} {...(props as any)} />
);

export const FireIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Flame className={className} strokeWidth={2} {...(props as any)} />
);

export const BoltIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Zap className={className} strokeWidth={2} {...(props as any)} />
);

export const ContrastIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <Contrast className={className} strokeWidth={2} {...(props as any)} />
);
