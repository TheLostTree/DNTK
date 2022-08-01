/* eslint-disable */
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";

export interface PlayTeamEntityInfo {
  EntityId?: number;
  PlayerUid?: number;
  AuthorityPeerId?: number;
  GadgetConfigId?: number;
  AbilityInfo?: AbilitySyncStateInfo;
}
