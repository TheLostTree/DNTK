/* eslint-disable */
import type Long from "long";
import type { InBattleMechanicusCardInfo } from "./InBattleMechanicusCardInfo";

/**
 * CmdId: 5397
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface InBattleMechanicusCardResultNotify {
  WaitSeconds?: number;
  GroupId?: number;
  CardList?: InBattleMechanicusCardInfo[];
  WaitBeginTimeUs?: Long;
  PlayerConfirmedCardMap?: { [key: number]: number };
  PlayIndex?: number;
}

export interface InBattleMechanicusCardResultNotify_PlayerConfirmedCardMapEntry {
  Key: number;
  Value: number;
}
