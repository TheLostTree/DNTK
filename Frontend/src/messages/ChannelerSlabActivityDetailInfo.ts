/* eslint-disable */
import type { ChannelerSlabBuffInfo } from "./ChannelerSlabBuffInfo";
import type { ChannelerSlabLoopDungeonStageInfo } from "./ChannelerSlabLoopDungeonStageInfo";
import type { ChannelerSlabChallengeStage } from "./ChannelerSlabChallengeStage";

export interface ChannelerSlabActivityDetailInfo {
  BuffInfo?: ChannelerSlabBuffInfo;
  LoopDungeonStageInfo?: ChannelerSlabLoopDungeonStageInfo;
  StageList?: ChannelerSlabChallengeStage[];
  PlayEndTime?: number;
}
