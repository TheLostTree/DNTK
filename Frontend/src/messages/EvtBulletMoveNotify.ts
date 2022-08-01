/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";
import type { Vector } from "./Vector.ts";

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
