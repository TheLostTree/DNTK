/* eslint-disable */
import type { RogueCellState } from "./RogueCellState";

export interface RogueCellInfo {
  CellConfigId?: number;
  DungeonId?: number;
  CellId?: number;
  CellType?: number;
  State?: RogueCellState;
}
