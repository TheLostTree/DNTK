/* eslint-disable */
import type { VehicleLocationInfo } from "./VehicleLocationInfo.d.ts";
import type { PlayerLocationInfo } from "./PlayerLocationInfo.d.ts";

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
