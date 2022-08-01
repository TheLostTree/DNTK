/* eslint-disable */
import type { ProfilePicture } from "./ProfilePicture";
import type { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo";

export interface HideAndSeekSettleInfo {
  Uid?: number;
  ProfilePicture?: ProfilePicture;
  CardList?: ExhibitionDisplayInfo[];
  Nickname?: string;
  HeadImage?: number;
  OnlineId?: string;
}
