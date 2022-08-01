/* eslint-disable */
import type { Uint32Pair } from "./Uint32Pair.ts";

export interface MechanicusInfo {
  GearLevelPairList?: Uint32Pair[];
  OpenSequenceIdList?: number[];
  Coin?: number;
  PunishOverTime?: number;
  MechanicusId?: number;
  FinishDifficultLevelList?: number[];
  IsFinishTeachDungeon?: boolean;
}
