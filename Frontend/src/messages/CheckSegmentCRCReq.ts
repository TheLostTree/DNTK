/* eslint-disable */
import type { SegmentCRCInfo } from "./SegmentCRCInfo.ts";

/**
 * CmdId: 53
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface CheckSegmentCRCReq {
  InfoList?: SegmentCRCInfo[];
}
