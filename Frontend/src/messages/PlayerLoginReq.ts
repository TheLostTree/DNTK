/* eslint-disable */
import type { TrackingIOInfo } from "./TrackingIOInfo.ts";
import type Long from "long";
import type { AdjustTrackingInfo } from "./AdjustTrackingInfo.ts";

/**
 * CmdId: 112
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PlayerLoginReq {
  LanguageType?: number;
  RegPlatform?: number;
  TrackingIoInfo?: TrackingIOInfo;
  AccountType?: number;
  Token?: string;
  ExtraBinData?: Buffer;
  ChannelId?: number;
  ClientDataVersion?: number;
  AccountUid?: string;
  ClientVersion?: string;
  Unk2700NGKCNPKKIKB?: string;
  CountryCode?: string;
  PsnId?: string;
  Unk2700GPPBEMDGEHH?: number;
  DeviceName?: string;
  Cps?: string;
  LoginRand?: Long;
  TargetHomeParam?: number;
  AdjustTrackingInfo?: AdjustTrackingInfo;
  IsTransfer?: boolean;
  Tag?: number;
  IsGuest?: boolean;
  EnvironmentErrorCode?: Buffer;
  OnlineId?: string;
  IsEditor?: boolean;
  ChecksumClientVersion?: string;
  SecurityCmdReply?: Buffer;
  Unk2700JNDKPBBCACB?: string;
  Birthday?: string;
  DeviceUuid?: string;
  ClientToken?: number;
  SubChannelId?: number;
  TargetUid?: number;
  DeviceInfo?: string;
  ClientVerisonHash?: string;
  Checksum?: string;
  PlatformType?: number;
  TargetHomeOwnerUid?: number;
  CloudClientIp?: number;
  GmUid?: number;
  SystemVersion?: string;
  Platform?: string;
}
