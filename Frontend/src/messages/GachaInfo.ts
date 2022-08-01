/* eslint-disable */
import type { GachaUpInfo } from "./GachaUpInfo";

export interface GachaInfo {
  GachaPreviewPrefabPath?: string;
  CostItemId?: number;
  IsNewWish?: boolean;
  GachaProbUrl?: string;
  GachaRecordUrlOversea?: string;
  CostItemNum?: number;
  GachaUpInfoList?: GachaUpInfo[];
  DisplayUp4ItemList?: number[];
  WishProgress?: number;
  ScheduleId?: number;
  GachaSortId?: number;
  LeftGachaTimes?: number;
  GachaPrefabPath?: string;
  TitleTextmap?: string;
  TenCostItemNum?: number;
  GachaType?: number;
  WishMaxProgress?: number;
  EndTime?: number;
  TenCostItemId?: number;
  GachaRecordUrl?: string;
  WishItemId?: number;
  BeginTime?: number;
  GachaProbUrlOversea?: string;
  GachaTimesLimit?: number;
  DisplayUp5ItemList?: number[];
}
