/* eslint-disable */
import type { ArenaChallengeMonsterLevel } from "./ArenaChallengeMonsterLevel.d.ts";

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
