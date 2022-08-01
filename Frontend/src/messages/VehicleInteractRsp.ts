/* eslint-disable */
import type { VehicleInteractType } from "./VehicleInteractType.ts";
import type { VehicleMember } from "./VehicleMember.ts";

/**
 * CmdId: 804
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface VehicleInteractRsp {
  InteractType?: VehicleInteractType;
  Member?: VehicleMember;
  EntityId?: number;
  Retcode?: number;
}
