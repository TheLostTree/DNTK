/* eslint-disable */
import type { Birthday } from "./Birthday.ts";
import type { FriendOnlineState } from "./FriendOnlineState.ts";
import type { FriendEnterHomeOption } from "./FriendEnterHomeOption.ts";
import type { ProfilePicture } from "./ProfilePicture.ts";
import type { SocialShowAvatarInfo } from "./SocialShowAvatarInfo.ts";

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
