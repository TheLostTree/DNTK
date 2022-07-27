/* eslint-disable */
import type { ExpeditionState } from "./ExpeditionState.d.ts";

export interface ExpeditionPathInfo {
  MarkId?: number;
  StartTime?: number;
  AssistAvatarId?: number;
  BonusProbability?: number;
  State?: ExpeditionState;
  AvatarIdList?: number[];
  AssistCostumeId?: number;
  PathId?: number;
  ChallengeId?: number;
  AssistUid?: number;
}
