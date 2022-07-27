/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 673
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface UseItemRsp {
  Guid?: Long;
  TargetGuid?: Long;
  ItemId?: number;
  OptionIdx?: number;
  Retcode?: number;
}
