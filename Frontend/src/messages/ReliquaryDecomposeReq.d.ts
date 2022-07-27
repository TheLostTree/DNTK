/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 638
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ReliquaryDecomposeReq {
  ConfigId?: number;
  TargetCount?: number;
  GuidList?: Long[];
}
