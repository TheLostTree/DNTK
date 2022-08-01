/* eslint-disable */
import type { ChannelerSlabOneofDungeon } from "./ChannelerSlabOneofDungeon.ts";
import type { ChannelerSlabChallenge } from "./ChannelerSlabChallenge.ts";

export interface ChannelerSlabChallengeStage {
  OpenTime?: number;
  ChallengeList?: ChannelerSlabChallenge[];
  IsOpen?: boolean;
  StageId?: number;
  DungeonInfo?: ChannelerSlabOneofDungeon;
}
