/* eslint-disable */
import type { WidgetSlotOp } from "./WidgetSlotOp.ts";
import type { WidgetSlotData } from "./WidgetSlotData.ts";

/**
 * CmdId: 4267
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WidgetSlotChangeNotify {
  Op?: WidgetSlotOp;
  Slot?: WidgetSlotData;
}
