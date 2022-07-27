/* eslint-disable */
import type { ForwardType } from "./ForwardType.d.ts";
import type { Vector } from "./Vector.d.ts";

/**
 * CmdId: 335
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtDoSkillSuccNotify {
  CasterId?: number;
  ForwardType?: ForwardType;
  Forward?: Vector;
  SkillId?: number;
}
