/* eslint-disable */
import type { AISnapshotEntitySkillCycle } from "./AISnapshotEntitySkillCycle.d.ts";

export interface AISnapshotEntityData {
  TickTime?: number;
  Tactic?: number;
  FinishedSkillCycles?: AISnapshotEntitySkillCycle[];
  MovedDistance?: number;
  AiTargetId?: number;
  ThreatTargetId?: number;
  ThreatListSize?: number;
  EntityId?: number;
  HittingAvatars?: { [key: number]: number };
  DistanceToPlayer?: number;
  AttackTargetId?: number;
  RealTime?: number;
}

export interface AISnapshotEntityData_HittingAvatarsEntry {
  Key: number;
  Value: number;
}
