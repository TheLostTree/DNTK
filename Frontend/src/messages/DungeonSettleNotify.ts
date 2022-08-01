/* eslint-disable */
import type { StrengthenPointData } from "./StrengthenPointData.ts";
import type { ParamList } from "./ParamList.ts";
import type { DungeonSettleExhibitionInfo } from "./DungeonSettleExhibitionInfo.ts";
import type { TowerLevelEndNotify } from "./TowerLevelEndNotify.ts";
import type { TrialAvatarFirstPassDungeonNotify } from "./TrialAvatarFirstPassDungeonNotify.ts";
import type { ChannelerSlabLoopDungeonResultInfo } from "./ChannelerSlabLoopDungeonResultInfo.ts";
import type { EffigyChallengeDungeonResultInfo } from "./EffigyChallengeDungeonResultInfo.ts";
import type { RoguelikeDungeonSettleInfo } from "./RoguelikeDungeonSettleInfo.ts";
import type { CrystalLinkSettleInfo } from "./CrystalLinkSettleInfo.ts";
import type { SummerTimeV2DungeonSettleInfo } from "./SummerTimeV2DungeonSettleInfo.ts";

/**
 * CmdId: 999
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DungeonSettleNotify {
  StrengthenPointDataMap?: { [key: number]: StrengthenPointData };
  IsSuccess?: boolean;
  CloseTime?: number;
  Unk2700OMCCFBBDJMI?: number;
  SettleShow?: { [key: number]: ParamList };
  ExhibitionInfoList?: DungeonSettleExhibitionInfo[];
  FailCondList?: number[];
  DungeonId?: number;
  Result?: number;
  TowerLevelEndNotify?: TowerLevelEndNotify | undefined;
  TrialAvatarFirstPassDungeonNotify?:
    | TrialAvatarFirstPassDungeonNotify
    | undefined;
  ChannellerSlabLoopDungeonResultInfo?:
    | ChannelerSlabLoopDungeonResultInfo
    | undefined;
  EffigyChallengeDungeonResultInfo?:
    | EffigyChallengeDungeonResultInfo
    | undefined;
  RoguelikeDungeonSettleInfo?: RoguelikeDungeonSettleInfo | undefined;
  CrystalLinkSettleInfo?: CrystalLinkSettleInfo | undefined;
  SummerTimeV2DungeonSettleInfo?: SummerTimeV2DungeonSettleInfo | undefined;
}

export interface DungeonSettleNotify_StrengthenPointDataMapEntry {
  Key: number;
  Value?: StrengthenPointData;
}

export interface DungeonSettleNotify_SettleShowEntry {
  Key: number;
  Value?: ParamList;
}
