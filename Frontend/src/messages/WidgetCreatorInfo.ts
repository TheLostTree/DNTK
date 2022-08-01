/* eslint-disable */
import type { WidgetCreatorOpType } from "./WidgetCreatorOpType";
import type { WidgetCreateLocationInfo } from "./WidgetCreateLocationInfo";

export interface WidgetCreatorInfo {
  OpType?: WidgetCreatorOpType;
  EntityId?: number;
  LocationInfo?: WidgetCreateLocationInfo;
}
