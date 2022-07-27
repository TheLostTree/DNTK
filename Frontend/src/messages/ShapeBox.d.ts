/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

export interface ShapeBox {
  Center?: Vector;
  Axis0?: Vector;
  Axis1?: Vector;
  Axis2?: Vector;
  Extents?: Vector;
}
