/* eslint-disable */
import type { GachaItem } from "./GachaItem.d.ts";

/**
 * CmdId: 1535
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DoGachaRsp {
  Unk2700LEEPELHDING?: boolean;
  GachaScheduleId?: number;
  WishItemId?: number;
  Retcode?: number;
  CostItemNum?: number;
  GachaTimesLimit?: number;
  CostItemId?: number;
  GachaType?: number;
  TenCostItemId?: number;
  WishMaxProgress?: number;
  Unk2700OJKKHDLEDCI?: number;
  TenCostItemNum?: number;
  LeftGachaTimes?: number;
  WishProgress?: number;
  GachaTimes?: number;
  GachaItemList?: GachaItem[];
  NewGachaRandom?: number;
}
