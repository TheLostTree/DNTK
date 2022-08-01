/* eslint-disable */
import type { Birthday } from "./Birthday";
import type { FriendOnlineState } from "./FriendOnlineState";
import type { FriendEnterHomeOption } from "./FriendEnterHomeOption";
import type { ProfilePicture } from "./ProfilePicture";
import type { SocialShowAvatarInfo } from "./SocialShowAvatarInfo";

export interface SocialDetail {
  Uid?: number;
  Nickname?: string;
  Level?: number;
  AvatarId?: number;
  Signature?: string;
  Birthday?: Birthday;
  WorldLevel?: number;
  ReservedList?: number[];
  OnlineState?: FriendOnlineState;
  Param?: number;
  IsFriend?: boolean;
  IsMpModeAvailable?: boolean;
  OnlineId?: string;
  NameCardId?: number;
  IsInBlacklist?: boolean;
  IsChatNoDisturb?: boolean;
  RemarkName?: string;
  FinishAchievementNum?: number;
  TowerFloorIndex?: number;
  TowerLevelIndex?: number;
  IsShowAvatar?: boolean;
  ShowAvatarInfoList?: SocialShowAvatarInfo[];
  ShowNameCardIdList?: number[];
  FriendEnterHomeOption?: FriendEnterHomeOption;
  ProfilePicture?: ProfilePicture;
}
