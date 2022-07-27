/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 191
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerTimeNotify {
  ServerTime?: Long;
  PlayerTime?: Long;
  IsPaused?: boolean;
}
