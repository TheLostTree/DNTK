/* eslint-disable */
import type { TrialAvatarGrantRecord } from "./TrialAvatarGrantRecord.d.ts";
import type { Item } from "./Item.d.ts";

export interface TrialAvatarInfo {
  TrialAvatarId?: number;
  TrialEquipList?: Item[];
  GrantRecord?: TrialAvatarGrantRecord;
}
