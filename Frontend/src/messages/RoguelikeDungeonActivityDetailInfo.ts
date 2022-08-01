/* eslint-disable */
import type { RogueStageInfo } from "./RogueStageInfo.ts";
import type { RoguelikeShikigamiRecord } from "./RoguelikeShikigamiRecord.ts";

export interface RoguelikeDungeonActivityDetailInfo {
  StageList?: RogueStageInfo[];
  ShikigamiList?: RoguelikeShikigamiRecord[];
  EquippedRuneList?: number[];
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  RuneList?: number[];
}
