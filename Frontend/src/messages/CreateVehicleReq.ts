/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 893
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface CreateVehicleReq {
  Pos?: Vector;
  VehicleId?: number;
  ScenePointId?: number;
  Rot?: Vector;
}
