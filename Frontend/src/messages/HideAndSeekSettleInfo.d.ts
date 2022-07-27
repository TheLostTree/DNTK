/* eslint-disable */
import type { ProfilePicture } from "./ProfilePicture.d.ts";
import type { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo.d.ts";

export interface HideAndSeekSettleInfo {
  Uid?: number;
  ProfilePicture?: ProfilePicture;
  CardList?: ExhibitionDisplayInfo[];
  Nickname?: string;
  HeadImage?: number;
  OnlineId?: string;
}
