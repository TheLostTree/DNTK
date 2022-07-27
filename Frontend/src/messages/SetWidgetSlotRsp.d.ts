/* eslint-disable */
import type { WidgetSlotOp } from "./WidgetSlotOp.d.ts";
import type { WidgetSlotTag } from "./WidgetSlotTag.d.ts";

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
