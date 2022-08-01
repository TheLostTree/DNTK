/* eslint-disable */
import type { FoundationStatus } from "./FoundationStatus.ts";

export interface FoundationInfo {
  Status?: FoundationStatus;
  UidList?: number[];
  CurrentBuildingId?: number;
  BeginBuildTimeMs?: number;
}
