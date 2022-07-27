/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

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
