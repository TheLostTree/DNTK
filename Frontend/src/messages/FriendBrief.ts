/* eslint-disable */
import type { FriendOnlineState } from "./FriendOnlineState";
import type { FriendEnterHomeOption } from "./FriendEnterHomeOption";
import type { ProfilePicture } from "./ProfilePicture";
import type { PlatformType } from "./PlatformType";
import type { SocialShowAvatarInfo } from "./SocialShowAvatarInfo";

export interface FriendBrief {
  Uid?: number;
  Nickname?: string;
  Level?: number;
  AvatarId?: number;
  WorldLevel?: number;
  Signature?: string;
  OnlineState?: FriendOnlineState;
  Param?: number;
  IsMpModeAvailable?: boolean;
  OnlineId?: string;
  LastActiveTime?: number;
  NameCardId?: number;
  MpPlayerNum?: number;
  IsChatNoDisturb?: boolean;
  ChatSequence?: number;
  RemarkName?: string;
  ShowAvatarInfoList?: SocialShowAvatarInfo[];
  FriendEnterHomeOption?: FriendEnterHomeOption;
  ProfilePicture?: ProfilePicture;
  IsGameSource?: boolean;
  IsPsnSource?: boolean;
  PlatformType?: PlatformType;
}
