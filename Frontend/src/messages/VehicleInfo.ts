/* eslint-disable */
import type { VehicleMember } from "./VehicleMember.ts";

export interface VehicleInfo {
  MemberList?: VehicleMember[];
  OwnerUid?: number;
  CurStamina?: number;
}
