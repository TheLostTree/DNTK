/* eslint-disable */
import type { ParentQuestRandomInfo } from "./ParentQuestRandomInfo.d.ts";
import type Long from "long";
import type { ChildQuest } from "./ChildQuest.d.ts";

export interface ParentQuest {
  RandomInfo?: ParentQuestRandomInfo;
  QuestVarSeq?: number;
  QuestVar?: number[];
  Unk2700KHDDIJNOICK?: Long;
  IsRandom?: boolean;
  ParentQuestId?: number;
  IsFinished?: boolean;
  TimeVarMap?: { [key: number]: number };
  ParentQuestState?: number;
  ChildQuestList?: ChildQuest[];
}

export interface ParentQuest_TimeVarMapEntry {
  Key: number;
  Value: number;
}
