/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 397
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtBulletDeactiveNotify {
  ForwardType?: ForwardType;
  EntityId?: number;
  DisappearPos?: Vector;
}
