/* eslint-disable */
import type { ProfilePicture } from "./ProfilePicture.ts";
import type { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo.ts";

export interface HideAndSeekSettleInfo {
  Uid?: number;
  ProfilePicture?: ProfilePicture;
  CardList?: ExhibitionDisplayInfo[];
  Nickname?: string;
  HeadImage?: number;
  OnlineId?: string;
}
