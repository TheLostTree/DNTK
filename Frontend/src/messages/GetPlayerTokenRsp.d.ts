/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 198
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetPlayerTokenRsp {
  Birthday?: string;
  Retcode?: number;
  SecurityCmdBuffer?: Buffer;
  SecretKeySeed?: Long;
  CountryCode?: string;
  ExtraBinData?: Buffer;
  SecretKey?: string;
  Unk2700NOJPEHIBDJH?: number;
  BlackUidEndTime?: number;
  Tag?: number;
  Token?: string;
  GmUid?: number;
  ChannelId?: number;
  PsnId?: string;
  ClientIpStr?: string;
  Msg?: string;
  AccountType?: number;
  SubChannelId?: number;
  Unk2700FLBKPCPGPDH?: boolean;
  EncryptedSeed?: string;
  IsProficientPlayer?: boolean;
  Unk2800BPJOBLNCBEI?: number;
  Uid?: number;
  AccountUid?: string;
  IsGuest?: boolean;
  ClientVersionRandomKey?: string;
  Unk2800NNBFCEAOEPB?: number[];
  PlatformType?: number;
  RegPlatform?: number;
  IsLoginWhiteList?: boolean;
  SeedSignature?: string;
}
