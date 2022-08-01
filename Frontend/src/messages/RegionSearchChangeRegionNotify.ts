/* eslint-disable */
/**
 * CmdId: 5618
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface RegionSearchChangeRegionNotify {
  Event?: RegionSearchChangeRegionNotify_RegionEvent;
  RegionId?: number;
}

export enum RegionSearchChangeRegionNotify_RegionEvent {
  REGION_EVENT_NONE = 0,
  REGION_EVENT_ENTER = 1,
  REGION_EVENT_LEAVE = 2,
  UNRECOGNIZED = -1,
}
