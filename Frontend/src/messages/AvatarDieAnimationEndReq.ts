/* eslint-disable */
import type { Vector } from "./Vector";
import type Long from "long";

/**
 * CmdId: 1610
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface AvatarDieAnimationEndReq {
  RebornPos?: Vector;
  DieGuid?: Long;
  SkillId?: number;
}
