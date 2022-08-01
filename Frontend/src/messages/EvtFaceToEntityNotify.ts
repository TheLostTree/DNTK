/* eslint-disable */
import type { ForwardType } from "./ForwardType";

/**
 * CmdId: 303
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtFaceToEntityNotify {
  FaceEntityId?: number;
  ForwardType?: ForwardType;
  EntityId?: number;
}
