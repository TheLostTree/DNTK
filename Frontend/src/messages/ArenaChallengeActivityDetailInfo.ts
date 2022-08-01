/* eslint-disable */
import type { ArenaChallengeMonsterLevel } from "./ArenaChallengeMonsterLevel";

export interface ArenaChallengeActivityDetailInfo {
  Unk2800GNKHCICOIMC?: boolean;
  LevelOpenTimeMap?: { [key: number]: number };
  WorldLevel?: number;
  LevelList?: ArenaChallengeMonsterLevel[];
}

export interface ArenaChallengeActivityDetailInfo_LevelOpenTimeMapEntry {
  Key: number;
  Value: number;
}
