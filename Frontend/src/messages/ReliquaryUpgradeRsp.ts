/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 693
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ReliquaryUpgradeRsp {
  OldLevel?: number;
  CurLevel?: number;
  TargetReliquaryGuid?: Long;
  CurAppendPropList?: number[];
  PowerUpRate?: number;
  OldAppendPropList?: number[];
  Retcode?: number;
}
