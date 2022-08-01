/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { Vector } from "./Vector";

/**
 * CmdId: 365
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtBulletMoveNotify {
  ForwardType?: ForwardType;
  CurPos?: Vector;
  EntityId?: number;
}
