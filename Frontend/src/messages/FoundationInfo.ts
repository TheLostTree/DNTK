/* eslint-disable */
import type { FoundationStatus } from "./FoundationStatus";

export interface FoundationInfo {
  Status?: FoundationStatus;
  UidList?: number[];
  CurrentBuildingId?: number;
  BeginBuildTimeMs?: number;
}
