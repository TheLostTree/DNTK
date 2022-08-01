/* eslint-disable */
import type { ReportReasonType } from "./ReportReasonType.ts";

/**
 * CmdId: 4024
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PlayerReportReq {
  Reason?: ReportReasonType;
  Content?: string;
  TargetHomeModuleId?: number;
  TargetHomeModuleName?: string;
  TargetUid?: number;
}
