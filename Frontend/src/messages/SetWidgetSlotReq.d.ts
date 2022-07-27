/* eslint-disable */
import type { WidgetSlotOp } from "./WidgetSlotOp.d.ts";
import type { WidgetSlotTag } from "./WidgetSlotTag.d.ts";

/**
 * CmdId: 4259
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SetWidgetSlotReq {
  TagList?: WidgetSlotTag[];
  MaterialId?: number;
  Op?: WidgetSlotOp;
}
