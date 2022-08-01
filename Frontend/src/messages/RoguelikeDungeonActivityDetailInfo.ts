/* eslint-disable */
import type { RogueStageInfo } from "./RogueStageInfo";
import type { RoguelikeShikigamiRecord } from "./RoguelikeShikigamiRecord";

export interface RoguelikeDungeonActivityDetailInfo {
  StageList?: RogueStageInfo[];
  ShikigamiList?: RoguelikeShikigamiRecord[];
  EquippedRuneList?: number[];
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  RuneList?: number[];
}
