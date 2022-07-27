/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 694
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ReliquaryPromoteRsp {
  OldPromoteLevel?: number;
  TargetReliquaryGuid?: Long;
  CurAppendPropList?: number[];
  Retcode?: number;
  CurPromoteLevel?: number;
  OldAppendPropList?: number[];
}
