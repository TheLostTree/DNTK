/* eslint-disable */
import type { FriendOnlineState } from "./FriendOnlineState.ts";
import type { FriendEnterHomeOption } from "./FriendEnterHomeOption.ts";
import type { ProfilePicture } from "./ProfilePicture.ts";
import type { PlatformType } from "./PlatformType.ts";
import type { SocialShowAvatarInfo } from "./SocialShowAvatarInfo.ts";

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
