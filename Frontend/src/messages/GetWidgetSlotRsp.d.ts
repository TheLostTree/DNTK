/* eslint-disable */
import type { WidgetSlotData } from "./WidgetSlotData.d.ts";

/**
 * CmdId: 4254
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetWidgetSlotRsp {
  SlotList?: WidgetSlotData[];
  Retcode?: number;
}
