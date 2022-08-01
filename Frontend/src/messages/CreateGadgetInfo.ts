/* eslint-disable */
import type { GadgetBornType } from "./GadgetBornType.ts";

export interface CreateGadgetInfo {
  BornType?: GadgetBornType;
  Chest?: CreateGadgetInfo_Chest;
}

export interface CreateGadgetInfo_Chest {
  ChestDropId?: number;
  IsShowCutscene?: boolean;
}
