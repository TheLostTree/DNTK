/* eslint-disable */
/**
 * CmdId: 4628
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface OtherPlayerEnterHomeNotify {
  Nickname?: string;
  Reason?: OtherPlayerEnterHomeNotify_Reason;
}

export enum OtherPlayerEnterHomeNotify_Reason {
  REASON_INVALID = 0,
  REASON_ENTER = 1,
  REASON_LEAVE = 2,
  UNRECOGNIZED = -1,
}
