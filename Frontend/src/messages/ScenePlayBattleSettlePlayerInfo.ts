/* eslint-disable */
import type { ProfilePicture } from "./ProfilePicture";
import type Long from "long";
import type { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo";

export interface ScenePlayBattleSettlePlayerInfo {
  CardList?: ExhibitionDisplayInfo[];
  ProfilePicture?: ProfilePicture;
  HeadImage?: number;
  StatisticId?: number;
  Uid?: number;
  Param?: Long;
  OnlineId?: string;
  Nickname?: string;
}
