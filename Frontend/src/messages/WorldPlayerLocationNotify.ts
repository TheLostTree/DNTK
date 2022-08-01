/* eslint-disable */
import type { PlayerWorldLocationInfo } from "./PlayerWorldLocationInfo";
import type { PlayerLocationInfo } from "./PlayerLocationInfo";

/**
 * CmdId: 258
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WorldPlayerLocationNotify {
  PlayerWorldLocList?: PlayerWorldLocationInfo[];
  PlayerLocList?: PlayerLocationInfo[];
}
