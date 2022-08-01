/* eslint-disable */
import type { PlayerWorldLocationInfo } from "./PlayerWorldLocationInfo.ts";
import type { PlayerLocationInfo } from "./PlayerLocationInfo.ts";

/**
 * CmdId: 258
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WorldPlayerLocationNotify {
  PlayerWorldLocList?: PlayerWorldLocationInfo[];
  PlayerLocList?: PlayerLocationInfo[];
}
