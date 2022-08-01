/* eslint-disable */
/**
 * CmdId: 1829
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerQuitFromMpNotify {
  Reason?: PlayerQuitFromMpNotify_QuitReason;
}

export enum PlayerQuitFromMpNotify_QuitReason {
  QUIT_REASON_INVALID = 0,
  QUIT_REASON_HOST_NO_OTHER_PLAYER = 1,
  QUIT_REASON_KICK_BY_HOST = 2,
  QUIT_REASON_BACK_TO_MY_WORLD = 3,
  QUIT_REASON_KICK_BY_HOST_LOGOUT = 4,
  QUIT_REASON_KICK_BY_HOST_BLOCK = 5,
  QUIT_REASON_BE_BLOCKED = 6,
  QUIT_REASON_KICK_BY_HOST_ENTER_HOME = 7,
  QUIT_REASON_HOST_SCENE_INVALID = 8,
  QUIT_REASON_KICK_BY_PLAY = 9,
  QUIT_REASON_Unk2800_FDECHAHJFDA = 10,
  UNRECOGNIZED = -1,
}
