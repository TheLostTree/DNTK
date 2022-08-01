/* eslint-disable */
import type { InvestigationMonster } from "./InvestigationMonster";

/**
 * CmdId: 1910
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface GetInvestigationMonsterRsp {
  MonsterList?: InvestigationMonster[];
  Retcode?: number;
  Unk2700DEMFDHNFBBJ?: boolean;
}
