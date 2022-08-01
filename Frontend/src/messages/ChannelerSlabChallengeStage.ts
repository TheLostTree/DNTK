/* eslint-disable */
import type { ChannelerSlabOneofDungeon } from "./ChannelerSlabOneofDungeon";
import type { ChannelerSlabChallenge } from "./ChannelerSlabChallenge";

export interface ChannelerSlabChallengeStage {
  OpenTime?: number;
  ChallengeList?: ChannelerSlabChallenge[];
  IsOpen?: boolean;
  StageId?: number;
  DungeonInfo?: ChannelerSlabOneofDungeon;
}
