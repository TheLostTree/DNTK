/* eslint-disable */
import type { Unk2700CCEOEOHLAPK } from "./Unk2700_CCEOEOHLAPK.ts";
import type { LunchBoxData } from "./LunchBoxData.ts";
import type { AnchorPointData } from "./AnchorPointData.ts";
import type { ClientCollectorData } from "./ClientCollectorData.ts";
import type { WidgetCoolDownData } from "./WidgetCoolDownData.ts";
import type { OneofGatherPointDetectorData } from "./OneofGatherPointDetectorData.ts";
import type { WidgetSlotData } from "./WidgetSlotData.ts";

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
