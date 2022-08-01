/* eslint-disable */
export interface PBNavMeshPoly {
  EdgeTypes?: PBNavMeshPoly_EdgeType[];
  Area?: number;
  Vects?: number[];
}

export enum PBNavMeshPoly_EdgeType {
  EDGE_TYPE_INNER = 0,
  EDGE_TYPE_TILE_BOUND = 1,
  EDGE_TYPE_TILE_BOUND_UNCONNECT = 2,
  EDGE_TYPE_Unk2700_BFOKBOEBPJF = 3,
  UNRECOGNIZED = -1,
}
