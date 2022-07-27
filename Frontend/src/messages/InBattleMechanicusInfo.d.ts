/* eslint-disable */
import type Long from "long";
import type { InBattleMechanicusStageType } from "./InBattleMechanicusStageType.d.ts";
import type { InBattleMechanicusCardInfo } from "./InBattleMechanicusCardInfo.d.ts";
import type { InBattleMechanicusMonsterInfo } from "./InBattleMechanicusMonsterInfo.d.ts";
import type { InBattleMechanicusPlayerInfo } from "./InBattleMechanicusPlayerInfo.d.ts";

export interface InBattleMechanicusInfo {
  LeftMonster?: number;
  WaitSeconds?: number;
  EntranceList?: number[];
  ExitList?: number[];
  HistoryCardList?: InBattleMechanicusCardInfo[];
  MaxEscapeMonsterNum?: number;
  BuildingStageDuration?: number;
  DurationMs?: Long;
  Stage?: InBattleMechanicusStageType;
  TotalRound?: number;
  MonsterList?: InBattleMechanicusMonsterInfo[];
  EscapedMonsterNum?: number;
  Round?: number;
  PickCardList?: InBattleMechanicusCardInfo[];
  PlayerList?: InBattleMechanicusPlayerInfo[];
  WaitBeginTimeUs?: Long;
  BeginTimeMs?: Long;
}
