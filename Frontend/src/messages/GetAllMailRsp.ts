/* eslint-disable */
import type { MailData } from "./MailData";

/**
 * CmdId: 1475
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetAllMailRsp {
  Retcode?: number;
  MailList?: MailData[];
  Unk2700OPEHLDAGICF?: boolean;
  IsTruncated?: boolean;
}
