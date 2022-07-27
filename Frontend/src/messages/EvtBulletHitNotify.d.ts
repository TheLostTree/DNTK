/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { ForwardType } from "./ForwardType.d.ts";
import type { HitColliderType } from "./HitColliderType.d.ts";

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
