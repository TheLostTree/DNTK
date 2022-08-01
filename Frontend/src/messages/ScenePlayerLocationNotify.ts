/* eslint-disable */
import type { VehicleLocationInfo } from "./VehicleLocationInfo";
import type { PlayerLocationInfo } from "./PlayerLocationInfo";

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
