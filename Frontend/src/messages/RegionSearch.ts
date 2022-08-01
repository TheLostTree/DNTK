/* eslint-disable */
import type { RegionSearchState } from "./RegionSearchState.ts";

export interface RegionSearch {
  IsEntered?: boolean;
  Progress?: number;
  State?: RegionSearchState;
  RegionSearchId?: number;
}
