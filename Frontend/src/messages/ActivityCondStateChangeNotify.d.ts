/* eslint-disable */
import type { Uint32Pair } from "./Uint32Pair.d.ts";

/**
 * CmdId: 2140
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ActivityCondStateChangeNotify {
  ActivatedSaleIdList?: number[];
  ActivityId?: number;
  ScheduleId?: number;
  ExpireCondList?: number[];
  DisableTransferPointInteractionList?: Uint32Pair[];
  MeetCondList?: number[];
}
