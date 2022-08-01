/* eslint-disable */
/**
 * CmdId: 161
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface RemoveRandTaskInfoNotify {
  IsSucc?: boolean;
  Reason?: RemoveRandTaskInfoNotify_FinishReason;
  RandTaskId?: number;
}

export enum RemoveRandTaskInfoNotify_FinishReason {
  FINISH_REASON_DEFAULT = 0,
  FINISH_REASON_CLEAR = 1,
  FINISH_REASON_DISTANCE = 2,
  FINISH_REASON_FINISH = 3,
  UNRECOGNIZED = -1,
}
