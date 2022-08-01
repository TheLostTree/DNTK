/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";
import type { Vector } from "./Vector.ts";

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
