/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 690
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface UseItemReq {
  Count?: number;
  TargetGuid?: Long;
  Guid?: Long;
  IsEnterMpDungeonTeam?: boolean;
  OptionIdx?: number;
}
