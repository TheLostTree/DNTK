/* eslint-disable */
import type { ResVersionConfig } from "./ResVersionConfig";
import type Long from "long";
import type { BlockInfo } from "./BlockInfo";
import type { ShortAbilityHashPair } from "./ShortAbilityHashPair";
import type { FeatureBlockInfo } from "./FeatureBlockInfo";

/**
 * CmdId: 135
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerLoginRsp {
  AbilityHashMap?: { [key: string]: number };
  IsAudit?: boolean;
  IsNewPlayer?: boolean;
  ResVersionConfig?: ResVersionConfig;
  IsEnableClientHashDebug?: boolean;
  ClientMd5?: string;
  ClientDataVersion?: number;
  CountryCode?: string;
  IsRelogin?: boolean;
  PlayerData?: Buffer;
  GameBiz?: string;
  BlockInfoMap?: { [key: number]: BlockInfo };
  RegisterCps?: string;
  NextResVersionConfig?: ResVersionConfig;
  IsTransfer?: boolean;
  TargetHomeOwnerUid?: number;
  ShortAbilityHashMap?: ShortAbilityHashPair[];
  AbilityHashCode?: number;
  IsScOpen?: boolean;
  ClientSilenceDataVersion?: number;
  Birthday?: string;
  IsUseAbilityHash?: boolean;
  ClientSilenceVersionSuffix?: string;
  PlayerDataVersion?: number;
  IsDataNeedRelogin?: boolean;
  FeatureBlockInfoList?: FeatureBlockInfo[];
  ClientSilenceMd5?: string;
  TargetUid?: number;
  TotalTickTime?: number;
  LoginRand?: Long;
  ScInfo?: Buffer;
  ClientVersionSuffix?: string;
  NextResourceUrl?: string;
  Retcode?: number;
}

export interface PlayerLoginRsp_AbilityHashMapEntry {
  Key: string;
  Value: number;
}

export interface PlayerLoginRsp_BlockInfoMapEntry {
  Key: number;
  Value?: BlockInfo;
}
