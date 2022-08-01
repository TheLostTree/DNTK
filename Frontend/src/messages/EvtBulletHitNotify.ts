/* eslint-disable */
import type { Vector } from "./Vector";
import type { ForwardType } from "./ForwardType";
import type { HitColliderType } from "./HitColliderType";

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
