/* eslint-disable */
/**
 * CmdId: 1822
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerPreEnterMpNotify {
  State?: PlayerPreEnterMpNotify_State;
  Uid?: number;
  Nickname?: string;
}

export enum PlayerPreEnterMpNotify_State {
  STATE_INVALID = 0,
  STATE_START = 1,
  STATE_TIMEOUT = 2,
  UNRECOGNIZED = -1,
}
