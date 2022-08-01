/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { ForwardType } from "./ForwardType.ts";
import type { HitColliderType } from "./HitColliderType.ts";

/**
 * CmdId: 348
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtBulletHitNotify {
  Unk2700FEALLBIBHOL?: number;
  HitPoint?: Vector;
  HitNormal?: Vector;
  HitBoxIndex?: number;
  HitEntityId?: number;
  EntityId?: number;
  ForwardPeer?: number;
  ForwardType?: ForwardType;
  HitColliderType?: HitColliderType;
}
