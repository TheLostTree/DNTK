/* eslint-disable */
import type { RogueCellInfo } from "./RogueCellInfo";
import type { RoguelikeRuneRecord } from "./RoguelikeRuneRecord";
import type Long from "long";

/**
 * CmdId: 8652
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface EnterRoguelikeDungeonNotify {
  IsMistClear?: boolean;
  DungeonWeightConfigId?: number;
  RuneRecordList?: RoguelikeRuneRecord[];
  OnstageAvatarGuidList?: Long[];
  IsFirstEnter?: boolean;
  ExploredCellList?: number[];
  CellInfoMap?: { [key: number]: RogueCellInfo };
  DungeonId?: number;
  RefreshCostItemCount?: number;
  BonusResourceProp?: number;
  ReviseMonsterLevel?: number;
  StageId?: number;
  BackstageAvatarGuidList?: Long[];
  CurCellId?: number;
  RefreshCostItemId?: number;
  CurLevel?: number;
}

export interface EnterRoguelikeDungeonNotify_CellInfoMapEntry {
  Key: number;
  Value?: RogueCellInfo;
}
