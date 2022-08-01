/* eslint-disable */
import type { CodexType } from "./CodexType.ts";

export interface CodexTypeData {
  CodexIdList?: number[];
  WeaponMaxPromoteLevelMap?: { [key: number]: number };
  Type?: CodexType;
  HaveViewedList?: boolean[];
}

export interface CodexTypeData_WeaponMaxPromoteLevelMapEntry {
  Key: number;
  Value: number;
}
