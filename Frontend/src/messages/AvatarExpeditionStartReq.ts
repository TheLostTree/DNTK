/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1715
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface AvatarExpeditionStartReq {
  ExpId?: number;
  AvatarGuid?: Long;
  HourTime?: number;
}
