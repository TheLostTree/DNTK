/* eslint-disable */
import type { ForwardType } from "./ForwardType.d.ts";
import type { Vector } from "./Vector.d.ts";

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
