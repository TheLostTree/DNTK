/* eslint-disable */
import type { FoundationStatus } from "./FoundationStatus.d.ts";

export interface FoundationInfo {
  Status?: FoundationStatus;
  UidList?: number[];
  CurrentBuildingId?: number;
  BeginBuildTimeMs?: number;
}
