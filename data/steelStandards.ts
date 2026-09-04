import { HOLE_PROCESSING_STANDARDS } from './standards/holeProcessing';
import { BOLT_STANDARDS } from './standards/bolts';
import { STUD_STANDARDS } from './standards/studs';
import { WELDING_STANDARDS } from './standards/welding';
import { MATERIAL_STANDARDS } from './standards/materials';
import { TOLERANCE_STANDARDS } from './standards/tolerances';
import { SAFETY_NDT_STANDARDS } from './standards/safetyNdt';

export type SteelCategory = 
  | 'bolt' 
  | 'hole_processing' 
  | 'welding' 
  | 'stud' 
  | 'materials' 
  | 'tolerances' 
  | 'safety_ndt';

export interface SteelStandardItem {
  id: string;
  category: SteelCategory;
  titleJP: string;
  titleMY: string;
  keyRuleJP: string;
  keyRuleMY: string;
  formulaOrValue?: string;
  detailsJP: string;
  detailsMY: string;
  examTipMY: string;
  tags: string[];
}

export const STEEL_STANDARDS_CATEGORIES = [
  { id: 'all', labelJP: '全項目', labelMY: 'အားလုံး (All)', icon: 'Squares2X2Icon' },
  { id: 'hole_processing', labelJP: '孔あけ加工・切断', labelMY: 'အပေါက်ဖောက်ခြင်း/ဖြတ်တောက်မှု', icon: 'EllipsisHorizontalCircleIcon' },
  { id: 'bolt', labelJP: '高力ボルト接合', labelMY: 'HTB(TC) bolt စံနှုန်းများ', icon: 'WrenchIcon' },
  { id: 'stud', labelJP: 'スタッド溶接', labelMY: 'Stud ဂဟေ စံနှုန်းများ', icon: 'BoltIcon' },
  { id: 'welding', labelJP: '溶接施工・温度管理', labelMY: 'ဂဟေဆက်နှင့် အပူချိန်/ဖော်မြူလာ', icon: 'FireIcon' },
  { id: 'materials', labelJP: '鋼材規格・材質特性', labelMY: 'သံမဏိအမျိုးအစားနှင့် စံနှုန်း', icon: 'CubeIcon' },
  { id: 'tolerances', labelJP: '工作精度・製作公差', labelMY: 'ထုတ်လုပ်မှုတိကျမှု/အလျှော့အတင်း', icon: 'ScaleIcon' },
  { id: 'safety_ndt', labelJP: '安全衛生・非破壊検査', labelMY: 'ဘေးအန္တရာယ်ကင်းရှင်းရေး/NDT', icon: 'ShieldCheckIcon' },
] as const;

export const STEEL_STANDARDS_DATA: SteelStandardItem[] = [
  ...HOLE_PROCESSING_STANDARDS,
  ...BOLT_STANDARDS,
  ...STUD_STANDARDS,
  ...WELDING_STANDARDS,
  ...MATERIAL_STANDARDS,
  ...TOLERANCE_STANDARDS,
  ...SAFETY_NDT_STANDARDS,
];
