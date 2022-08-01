/* eslint-disable */
import type { Unk2700CCEOEOHLAPK } from "./Unk2700_CCEOEOHLAPK";
import type { LunchBoxData } from "./LunchBoxData";
import type { AnchorPointData } from "./AnchorPointData";
import type { ClientCollectorData } from "./ClientCollectorData";
import type { WidgetCoolDownData } from "./WidgetCoolDownData";
import type { OneofGatherPointDetectorData } from "./OneofGatherPointDetectorData";
import type { WidgetSlotData } from "./WidgetSlotData";

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
