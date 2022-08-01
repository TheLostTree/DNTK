/* eslint-disable */
import type { ChannelerSlabBuffInfo } from "./ChannelerSlabBuffInfo.ts";
import type { ChannelerSlabLoopDungeonStageInfo } from "./ChannelerSlabLoopDungeonStageInfo.ts";
import type { ChannelerSlabChallengeStage } from "./ChannelerSlabChallengeStage.ts";

export interface ChannelerSlabActivityDetailInfo {
  BuffInfo?: ChannelerSlabBuffInfo;
  LoopDungeonStageInfo?: ChannelerSlabLoopDungeonStageInfo;
  StageList?: ChannelerSlabChallengeStage[];
  PlayEndTime?: number;
}
