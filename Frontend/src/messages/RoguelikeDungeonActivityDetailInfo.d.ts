/* eslint-disable */
import type { RogueStageInfo } from "./RogueStageInfo.d.ts";
import type { RoguelikeShikigamiRecord } from "./RoguelikeShikigamiRecord.d.ts";

export interface RoguelikeDungeonActivityDetailInfo {
  StageList?: RogueStageInfo[];
  ShikigamiList?: RoguelikeShikigamiRecord[];
  EquippedRuneList?: number[];
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  RuneList?: number[];
}
