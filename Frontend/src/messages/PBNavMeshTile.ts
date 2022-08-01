/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { PBNavMeshPoly } from "./PBNavMeshPoly.ts";

export interface PBNavMeshTile {
  Vecs?: Vector[];
  Polys?: PBNavMeshPoly[];
}
