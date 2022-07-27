/* eslint-disable */
import type { HomeCustomFurnitureInfo } from "./HomeCustomFurnitureInfo.d.ts";

/**
 * CmdId: 4712
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeCustomFurnitureInfoNotify {
  DeleteCustomFurnitureList?: number[];
  UsedSubFurnitureCountMap?: { [key: number]: number };
  CustomFurnitureInfoList?: HomeCustomFurnitureInfo[];
}

export interface HomeCustomFurnitureInfoNotify_UsedSubFurnitureCountMapEntry {
  Key: number;
  Value: number;
}
