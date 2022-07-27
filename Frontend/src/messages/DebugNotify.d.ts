/* eslint-disable */
/**
 * CmdId: 101
 * TargetService: 101
 * EnetChannelId: 2
 * EnetIsReliable: true
 */
export interface DebugNotify {
  Id?: number;
  Name?: string;
  Retcode?: DebugNotify_Retcode;
}

export enum DebugNotify_Retcode {
  RETCODE_SUCC = 0,
  RETCODE_FAIL = 1,
  UNRECOGNIZED = -1,
}
