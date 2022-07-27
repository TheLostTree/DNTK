/* eslint-disable */
import type { ChannelerSlabBuffInfo } from "./ChannelerSlabBuffInfo.d.ts";
import type { ChannelerSlabLoopDungeonStageInfo } from "./ChannelerSlabLoopDungeonStageInfo.d.ts";
import type { ChannelerSlabChallengeStage } from "./ChannelerSlabChallengeStage.d.ts";

export interface ChannelerSlabActivityDetailInfo {
  BuffInfo?: ChannelerSlabBuffInfo;
  LoopDungeonStageInfo?: ChannelerSlabLoopDungeonStageInfo;
  StageList?: ChannelerSlabChallengeStage[];
  PlayEndTime?: number;
}
