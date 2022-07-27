/* eslint-disable */
import type { InBattleMechanicusBuildingInfo } from "./InBattleMechanicusBuildingInfo.d.ts";

export interface InBattleMechanicusPlayerInfo {
  PickCardId?: number;
  Uid?: number;
  BuildingList?: InBattleMechanicusBuildingInfo[];
  IsCardConfirmed?: boolean;
  BuildingPoints?: number;
}
