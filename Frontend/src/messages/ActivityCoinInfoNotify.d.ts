/* eslint-disable */
/**
 * CmdId: 2008
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ActivityCoinInfoNotify {
  ScheduleId?: number;
  ActivityId?: number;
  ActivityCoinMap?: { [key: number]: number };
}

export interface ActivityCoinInfoNotify_ActivityCoinMapEntry {
  Key: number;
  Value: number;
}
