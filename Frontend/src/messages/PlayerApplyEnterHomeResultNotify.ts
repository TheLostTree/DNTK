/* eslint-disable */
/**
 * CmdId: 4468
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerApplyEnterHomeResultNotify {
  TargetNickname?: string;
  Reason?: PlayerApplyEnterHomeResultNotify_Reason;
  TargetUid?: number;
  IsAgreed?: boolean;
}

export enum PlayerApplyEnterHomeResultNotify_Reason {
  REASON_PLAYER_JUDGE = 0,
  REASON_PLAYER_ENTER_OPTION_REFUSE = 1,
  REASON_PLAYER_ENTER_OPTION_DIRECT = 2,
  REASON_SYSTEM_JUDGE = 3,
  REASON_HOST_IN_MATCH = 4,
  REASON_PS_PLAYER_NOT_ACCEPT_OTHERS = 5,
  REASON_OPEN_STATE_NOT_OPEN = 6,
  REASON_HOST_IN_EDIT_MODE = 7,
  REASON_PRIOR_CHECK = 8,
  UNRECOGNIZED = -1,
}
