/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { Vector } from "./Vector";

/**
 * CmdId: 327
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtAvatarUpdateFocusNotify {
  ForwardType?: ForwardType;
  FocusForward?: Vector;
  EntityId?: number;
}
