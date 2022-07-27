/* eslint-disable */
import type { ChannelerSlabOneofDungeon } from "./ChannelerSlabOneofDungeon.d.ts";
import type { ChannelerSlabChallenge } from "./ChannelerSlabChallenge.d.ts";

export interface ChannelerSlabChallengeStage {
  OpenTime?: number;
  ChallengeList?: ChannelerSlabChallenge[];
  IsOpen?: boolean;
  StageId?: number;
  DungeonInfo?: ChannelerSlabOneofDungeon;
}
