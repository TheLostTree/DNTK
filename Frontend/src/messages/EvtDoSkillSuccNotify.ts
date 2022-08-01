/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { Vector } from "./Vector";

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
