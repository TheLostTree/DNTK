/* eslint-disable */
import type { TowerMonthlyCombatRecord } from "./TowerMonthlyCombatRecord.ts";
import type { TowerMonthlyBrief } from "./TowerMonthlyBrief.ts";

export interface TowerMonthlyDetail {
  MonthlyCombatRecord?: TowerMonthlyCombatRecord;
  MonthlyBrief?: TowerMonthlyBrief;
}
