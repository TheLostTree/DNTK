/* eslint-disable */
import type { WidgetCreatorOpType } from "./WidgetCreatorOpType.d.ts";
import type { WidgetCreateLocationInfo } from "./WidgetCreateLocationInfo.d.ts";

export interface WidgetCreatorInfo {
  OpType?: WidgetCreatorOpType;
  EntityId?: number;
  LocationInfo?: WidgetCreateLocationInfo;
}
