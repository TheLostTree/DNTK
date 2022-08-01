/* eslint-disable */
import type { VehicleLocationInfo } from "./VehicleLocationInfo.ts";
import type { PlayerLocationInfo } from "./PlayerLocationInfo.ts";

/**
 * CmdId: 248
 * EnetChannelId: 1
 * EnetIsReliable: true
 */
export interface ScenePlayerLocationNotify {
  VehicleLocList?: VehicleLocationInfo[];
  SceneId?: number;
  PlayerLocList?: PlayerLocationInfo[];
}
