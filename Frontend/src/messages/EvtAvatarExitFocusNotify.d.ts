/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { ForwardType } from "./ForwardType.d.ts";

/**
 * CmdId: 393
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtAvatarExitFocusNotify {
  FinishForward?: Vector;
  ForwardType?: ForwardType;
  EntityId?: number;
}
