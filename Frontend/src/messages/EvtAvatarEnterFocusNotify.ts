/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 304
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtAvatarEnterFocusNotify {
  EntityId?: number;
  CanMove?: boolean;
  EnterHoldingFocusShoot?: boolean;
  Unk2700GACKGHEHEIK?: boolean;
  UseAutoFocus?: boolean;
  FastFocus?: boolean;
  ShowCrossHair?: boolean;
  EnterNormalFocusShoot?: boolean;
  ForwardType?: ForwardType;
  FocusForward?: Vector;
  DisableAnim?: boolean;
  UseFocusSticky?: boolean;
  UseGyro?: boolean;
}
