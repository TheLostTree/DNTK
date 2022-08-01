/* eslint-disable */
import type { AbilityControlBlock } from "./AbilityControlBlock";
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";

export interface TeamEnterSceneInfo {
  AbilityControlBlock?: AbilityControlBlock;
  TeamAbilityInfo?: AbilitySyncStateInfo;
  TeamEntityId?: number;
}
