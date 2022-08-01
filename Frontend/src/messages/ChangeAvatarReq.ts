/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type Long from "long";

/**
 * CmdId: 1640
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ChangeAvatarReq {
  MovePos?: Vector;
  SkillId?: number;
  Guid?: Long;
  IsMove?: boolean;
}
