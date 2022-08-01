/* eslint-disable */
import type { BlossomBriefInfo } from "./BlossomBriefInfo";

/**
 * CmdId: 2798
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface GetBlossomBriefInfoListRsp {
  Retcode?: number;
  BriefInfoList?: BlossomBriefInfo[];
}
