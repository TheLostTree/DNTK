/* eslint-disable */
import type { GadgetCrucibleInfo } from "./GadgetCrucibleInfo.ts";

export interface GadgetPlayInfo {
  PlayType?: number;
  Duration?: number;
  ProgressStageList?: number[];
  StartCd?: number;
  StartTime?: number;
  Progress?: number;
  CrucibleInfo?: GadgetCrucibleInfo | undefined;
}
