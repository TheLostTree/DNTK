/* eslint-disable */
import type { FriendOnlineState } from "./FriendOnlineState.d.ts";
import type { FriendEnterHomeOption } from "./FriendEnterHomeOption.d.ts";
import type { ProfilePicture } from "./ProfilePicture.d.ts";
import type { PlatformType } from "./PlatformType.d.ts";
import type { SocialShowAvatarInfo } from "./SocialShowAvatarInfo.d.ts";

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
