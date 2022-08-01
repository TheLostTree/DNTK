/* eslint-disable */
import type { DraftInviteFailInfo } from "./DraftInviteFailInfo";

/**
 * CmdId: 5435
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface DraftOwnerStartInviteRsp {
  InviteFailInfoList?: DraftInviteFailInfo[];
  Retcode?: number;
  WrongUid?: number;
  DraftId?: number;
}
