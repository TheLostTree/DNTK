/* eslint-disable */
import type { AbilityControlBlock } from "./AbilityControlBlock.d.ts";
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo.d.ts";

export interface TeamEnterSceneInfo {
  AbilityControlBlock?: AbilityControlBlock;
  TeamAbilityInfo?: AbilitySyncStateInfo;
  TeamEntityId?: number;
}
