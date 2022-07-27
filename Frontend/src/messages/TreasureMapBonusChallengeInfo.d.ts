/* eslint-disable */
export interface TreasureMapBonusChallengeInfo {
  IsDone?: boolean;
  ConfigId?: number;
  IsActive?: boolean;
  FragmentMap?: { [key: number]: boolean };
  SolutionId?: number;
}

export interface TreasureMapBonusChallengeInfo_FragmentMapEntry {
  Key: number;
  Value: boolean;
}
