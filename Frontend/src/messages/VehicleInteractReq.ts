/* eslint-disable */
import type { VehicleInteractType } from "./VehicleInteractType";

/**
 * CmdId: 865
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface VehicleInteractReq {
  InteractType?: VehicleInteractType;
  Pos?: number;
  EntityId?: number;
}
