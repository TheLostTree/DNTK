/* eslint-disable */
import type { Unk2700FHOKHHBGPEG } from "./Unk2700_FHOKHHBGPEG.d.ts";
import type { StrengthenPointData } from "./StrengthenPointData.d.ts";
import type { ChannelerSlabLoopDungeonResultInfo } from "./ChannelerSlabLoopDungeonResultInfo.d.ts";
import type { EffigyChallengeDungeonResultInfo } from "./EffigyChallengeDungeonResultInfo.d.ts";
import type { PotionDungeonResultInfo } from "./PotionDungeonResultInfo.d.ts";
import type { CustomDungeonResultInfo } from "./CustomDungeonResultInfo.d.ts";

/**
 * CmdId: 939
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DungeonChallengeFinishNotify {
  StrengthenPointDataMap?: { [key: number]: StrengthenPointData };
  Unk2700ONCDLPDHFAB?: Unk2700FHOKHHBGPEG;
  IsNewRecord?: boolean;
  ChallengeRecordType?: number;
  TimeCost?: number;
  CurrentValue?: number;
  IsSuccess?: boolean;
  ChallengeIndex?: number;
  ChannellerSlabLoopDungeonResultInfo?:
    | ChannelerSlabLoopDungeonResultInfo
    | undefined;
  EffigyChallengeDungeonResultInfo?:
    | EffigyChallengeDungeonResultInfo
    | undefined;
  PotionDungeonResultInfo?: PotionDungeonResultInfo | undefined;
  CustomDungeonResultInfo?: CustomDungeonResultInfo | undefined;
}

export interface DungeonChallengeFinishNotify_StrengthenPointDataMapEntry {
  Key: number;
  Value?: StrengthenPointData;
}
