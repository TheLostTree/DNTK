/* eslint-disable */
import type { WidgetSlotOp } from "./WidgetSlotOp.d.ts";
import type { WidgetSlotData } from "./WidgetSlotData.d.ts";

/**
 * CmdId: 4267
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WidgetSlotChangeNotify {
  Op?: WidgetSlotOp;
  Slot?: WidgetSlotData;
}
