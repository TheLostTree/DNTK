/* eslint-disable */
import type { WidgetCreateLocationInfo } from "./WidgetCreateLocationInfo.d.ts";
import type { WidgetCreatorInfo } from "./WidgetCreatorInfo.d.ts";

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
