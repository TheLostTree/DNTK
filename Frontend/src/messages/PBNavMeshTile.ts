/* eslint-disable */
import type { Vector } from "./Vector";
import type { PBNavMeshPoly } from "./PBNavMeshPoly";

export interface PBNavMeshTile {
  Vecs?: Vector[];
  Polys?: PBNavMeshPoly[];
}
