/* eslint-disable */
import type { TowerMonthlyDetail } from "./TowerMonthlyDetail.ts";

/**
 * CmdId: 2443
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TowerRecordHandbookRsp {
  Retcode?: number;
  MonthlyDetailList?: TowerMonthlyDetail[];
}
