/* eslint-disable */
import type { WidgetCreatorOpType } from "./WidgetCreatorOpType.ts";
import type { WidgetCreateLocationInfo } from "./WidgetCreateLocationInfo.ts";

export interface WidgetCreatorInfo {
  OpType?: WidgetCreatorOpType;
  EntityId?: number;
  LocationInfo?: WidgetCreateLocationInfo;
}
