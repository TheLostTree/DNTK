/* eslint-disable */
import type { TowerFightRecordPair } from "./TowerFightRecordPair.ts";

export interface TowerMonthlyCombatRecord {
  MostKillAvatarPair?: TowerFightRecordPair;
  MostCastNormalSkillAvatarPair?: TowerFightRecordPair;
  MostRevealAvatarList?: TowerFightRecordPair[];
  MostCastEnergySkillAvatarPair?: TowerFightRecordPair;
  HighestDpsAvatrPair?: TowerFightRecordPair;
  MostTakeDamageAvatarPair?: TowerFightRecordPair;
}
