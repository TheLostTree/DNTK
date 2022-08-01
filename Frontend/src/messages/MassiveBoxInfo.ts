/* eslint-disable */
import type { Vector } from "./Vector";

export interface MassiveBoxInfo {
  Id?: number;
  ConfigId?: number;
  Center?: Vector;
  Extents?: Vector;
  Up?: Vector;
  Forward?: Vector;
  Right?: Vector;
}
