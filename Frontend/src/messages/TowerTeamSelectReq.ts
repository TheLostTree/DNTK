/* eslint-disable */
import type { TowerTeam } from "./TowerTeam.ts";

/**
 * CmdId: 2421
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface TowerTeamSelectReq {
  TowerTeamList?: TowerTeam[];
  FloorId?: number;
}
