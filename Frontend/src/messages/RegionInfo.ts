/* eslint-disable */
import type { ResVersionConfig } from "./ResVersionConfig";

export interface RegionInfo {
  GateserverIp?: string;
  GateserverPort?: number;
  PayCallbackUrl?: string;
  AreaType?: string;
  ResourceUrl?: string;
  DataUrl?: string;
  FeedbackUrl?: string;
  BulletinUrl?: string;
  ResourceUrlBak?: string;
  DataUrlBak?: string;
  ClientDataVersion?: number;
  HandbookUrl?: string;
  ClientSilenceDataVersion?: number;
  ClientDataMd5?: string;
  ClientSilenceDataMd5?: string;
  ResVersionConfig?: ResVersionConfig;
  SecretKey?: Buffer;
  OfficialCommunityUrl?: string;
  ClientVersionSuffix?: string;
  ClientSilenceVersionSuffix?: string;
  UseGateserverDomainName?: boolean;
  GateserverDomainName?: string;
  UserCenterUrl?: string;
  AccountBindUrl?: string;
  CdkeyUrl?: string;
  PrivacyPolicyUrl?: string;
  NextResourceUrl?: string;
  NextResVersionConfig?: ResVersionConfig;
}
