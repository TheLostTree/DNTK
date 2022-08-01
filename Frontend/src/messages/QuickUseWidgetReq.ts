/* eslint-disable */
import type { WidgetCreateLocationInfo } from "./WidgetCreateLocationInfo";
import type { WidgetCameraInfo } from "./WidgetCameraInfo";
import type { WidgetCreatorInfo } from "./WidgetCreatorInfo";
import type { WidgetThunderBirdFeatherInfo } from "./WidgetThunderBirdFeatherInfo";

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
