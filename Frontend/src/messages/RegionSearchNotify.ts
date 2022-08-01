/* eslint-disable */
import type { RegionSearchInfo } from "./RegionSearchInfo.ts";

/**
 * CmdId: 5626
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface RegionSearchNotify {
  RegionSearchList?: RegionSearchInfo[];
  Uid?: number;
}
