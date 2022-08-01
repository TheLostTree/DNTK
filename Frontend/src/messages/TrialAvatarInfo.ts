/* eslint-disable */
import type { TrialAvatarGrantRecord } from "./TrialAvatarGrantRecord.ts";
import type { Item } from "./Item.ts";

export interface TrialAvatarInfo {
  TrialAvatarId?: number;
  TrialEquipList?: Item[];
  GrantRecord?: TrialAvatarGrantRecord;
}
