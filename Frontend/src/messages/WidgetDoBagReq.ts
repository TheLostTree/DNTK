/* eslint-disable */
import type { WidgetCreateLocationInfo } from "./WidgetCreateLocationInfo.ts";
import type { WidgetCreatorInfo } from "./WidgetCreatorInfo.ts";

/**
 * CmdId: 4255
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface WidgetDoBagReq {
  MaterialId?: number;
  LocationInfo?: WidgetCreateLocationInfo | undefined;
  WidgetCreatorInfo?: WidgetCreatorInfo | undefined;
}
