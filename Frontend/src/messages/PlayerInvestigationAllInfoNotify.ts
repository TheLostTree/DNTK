/* eslint-disable */
import type { Investigation } from "./Investigation";
import type { InvestigationTarget } from "./InvestigationTarget";

/**
 * CmdId: 1928
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerInvestigationAllInfoNotify {
  InvestigationList?: Investigation[];
  InvestigationTargetList?: InvestigationTarget[];
}
