/* eslint-disable */
import type { WidgetSlotOp } from "./WidgetSlotOp";
import type { WidgetSlotTag } from "./WidgetSlotTag";

/**
 * CmdId: 4277
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SetWidgetSlotRsp {
  TagList?: WidgetSlotTag[];
  Retcode?: number;
  MaterialId?: number;
  Op?: WidgetSlotOp;
}
