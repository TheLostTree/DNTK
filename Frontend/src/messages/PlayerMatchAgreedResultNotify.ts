/* eslint-disable */
import type { MatchType } from "./MatchType";

/**
 * CmdId: 4170
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerMatchAgreedResultNotify {
  TargetUid?: number;
  MatchType?: MatchType;
  Reason?: PlayerMatchAgreedResultNotify_Reason;
}

export enum PlayerMatchAgreedResultNotify_Reason {
  REASON_SUCC = 0,
  REASON_TARGET_SCENE_CANNOT_ENTER = 1,
  REASON_SELF_MP_UNAVAILABLE = 2,
  REASON_OTHER_DATA_VERSION_NOT_LATEST = 3,
  REASON_DATA_VERSION_NOT_LATEST = 4,
  UNRECOGNIZED = -1,
}
