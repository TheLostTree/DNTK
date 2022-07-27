/* eslint-disable */
import type { WidgetCreateLocationInfo } from "./WidgetCreateLocationInfo.d.ts";
import type { WidgetCameraInfo } from "./WidgetCameraInfo.d.ts";
import type { WidgetCreatorInfo } from "./WidgetCreatorInfo.d.ts";
import type { WidgetThunderBirdFeatherInfo } from "./WidgetThunderBirdFeatherInfo.d.ts";

/**
 * CmdId: 4299
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface QuickUseWidgetReq {
  LocationInfo?: WidgetCreateLocationInfo | undefined;
  CameraInfo?: WidgetCameraInfo | undefined;
  CreatorInfo?: WidgetCreatorInfo | undefined;
  ThunderBirdFeatherInfo?: WidgetThunderBirdFeatherInfo | undefined;
}
