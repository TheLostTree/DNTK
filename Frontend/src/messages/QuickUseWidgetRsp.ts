/* eslint-disable */
import type { OneofGatherPointDetectorData } from "./OneofGatherPointDetectorData.ts";
import type { ClientCollectorData } from "./ClientCollectorData.ts";
import type { SkyCrystalDetectorQuickUseResult } from "./SkyCrystalDetectorQuickUseResult.ts";

/**
 * CmdId: 4270
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface QuickUseWidgetRsp {
  MaterialId?: number;
  Retcode?: number;
  DetectorData?: OneofGatherPointDetectorData | undefined;
  ClientCollectorData?: ClientCollectorData | undefined;
  SkyCrystalDetectorQuickUseResult?:
    | SkyCrystalDetectorQuickUseResult
    | undefined;
}
