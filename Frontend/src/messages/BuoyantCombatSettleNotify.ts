/* eslint-disable */
import type { BuoyantCombatSettleInfo } from "./BuoyantCombatSettleInfo.ts";

/**
 * CmdId: 8305
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BuoyantCombatSettleNotify {
  GalleryId?: number;
  SettleInfo?: BuoyantCombatSettleInfo;
}
