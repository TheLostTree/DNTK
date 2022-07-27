/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

export interface TreasureMapDetectorData {
  RegionId?: number;
  CenterPos?: Vector;
  IsRegionDetected?: boolean;
  SpotList?: Vector[];
  Radius?: number;
}
