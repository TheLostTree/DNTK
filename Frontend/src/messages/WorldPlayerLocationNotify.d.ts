/* eslint-disable */
import type { PlayerWorldLocationInfo } from "./PlayerWorldLocationInfo.d.ts";
import type { PlayerLocationInfo } from "./PlayerLocationInfo.d.ts";

/**
 * CmdId: 258
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WorldPlayerLocationNotify {
  PlayerWorldLocList?: PlayerWorldLocationInfo[];
  PlayerLocList?: PlayerLocationInfo[];
}
