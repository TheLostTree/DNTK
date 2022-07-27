/* eslint-disable */
import type { Unk2700CCEOEOHLAPK } from "./Unk2700_CCEOEOHLAPK.d.ts";
import type { LunchBoxData } from "./LunchBoxData.d.ts";
import type { AnchorPointData } from "./AnchorPointData.d.ts";
import type { ClientCollectorData } from "./ClientCollectorData.d.ts";
import type { WidgetCoolDownData } from "./WidgetCoolDownData.d.ts";
import type { OneofGatherPointDetectorData } from "./OneofGatherPointDetectorData.d.ts";
import type { WidgetSlotData } from "./WidgetSlotData.d.ts";

/**
 * CmdId: 4271
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AllWidgetDataNotify {
  Unk2700COIELIGEACL?: Unk2700CCEOEOHLAPK;
  AnchorPointList?: AnchorPointData[];
  ClientCollectorDataList?: ClientCollectorData[];
  NormalCoolDownDataList?: WidgetCoolDownData[];
  NextAnchorPointUsableTime?: number;
  OneofGatherPointDetectorDataList?: OneofGatherPointDetectorData[];
  LunchBoxData?: LunchBoxData;
  CoolDownGroupDataList?: WidgetCoolDownData[];
  SlotList?: WidgetSlotData[];
}
