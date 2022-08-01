/* eslint-disable */
import type { AbilityControlBlock } from "./AbilityControlBlock.ts";
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo.ts";

export interface TeamEnterSceneInfo {
  AbilityControlBlock?: AbilityControlBlock;
  TeamAbilityInfo?: AbilitySyncStateInfo;
  TeamEntityId?: number;
}
