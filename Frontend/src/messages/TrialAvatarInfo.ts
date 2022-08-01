/* eslint-disable */
import type { TrialAvatarGrantRecord } from "./TrialAvatarGrantRecord";
import type { Item } from "./Item";

export interface TrialAvatarInfo {
  TrialAvatarId?: number;
  TrialEquipList?: Item[];
  GrantRecord?: TrialAvatarGrantRecord;
}
