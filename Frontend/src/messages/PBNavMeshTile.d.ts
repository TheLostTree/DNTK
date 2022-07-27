/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { PBNavMeshPoly } from "./PBNavMeshPoly.d.ts";

export interface PBNavMeshTile {
  Vecs?: Vector[];
  Polys?: PBNavMeshPoly[];
}
