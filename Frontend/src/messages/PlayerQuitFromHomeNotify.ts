/* eslint-disable */
/**
 * CmdId: 4656
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerQuitFromHomeNotify {
  Reason?: PlayerQuitFromHomeNotify_QuitReason;
}

export enum PlayerQuitFromHomeNotify_QuitReason {
  QUIT_REASON_INVALID = 0,
  QUIT_REASON_KICK_BY_HOST = 1,
  QUIT_REASON_BACK_TO_MY_WORLD = 2,
  QUIT_REASON_HOME_BLOCKED = 3,
  QUIT_REASON_HOME_IN_EDIT_MODE = 4,
  QUIT_REASON_BY_MUIP = 5,
  QUIT_REASON_CUR_MODULE_CLOSED = 6,
  UNRECOGNIZED = -1,
}
