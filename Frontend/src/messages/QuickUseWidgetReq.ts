/* eslint-disable */
import type { WidgetCreateLocationInfo } from "./WidgetCreateLocationInfo.ts";
import type { WidgetCameraInfo } from "./WidgetCameraInfo.ts";
import type { WidgetCreatorInfo } from "./WidgetCreatorInfo.ts";
import type { WidgetThunderBirdFeatherInfo } from "./WidgetThunderBirdFeatherInfo.ts";

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
