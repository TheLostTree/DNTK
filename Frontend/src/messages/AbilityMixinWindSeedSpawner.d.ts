/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

export interface AbilityMixinWindSeedSpawner {
  AddSignal?: AbilityMixinWindSeedSpawner_AddSignal | undefined;
  RefreshSeed?: AbilityMixinWindSeedSpawner_RefreshSeed | undefined;
  CatchSeed?: AbilityMixinWindSeedSpawner_CatchSeed | undefined;
}

export interface AbilityMixinWindSeedSpawner_AddSignal {}

export interface AbilityMixinWindSeedSpawner_RefreshSeed {
  PosList?: Vector[];
}

export interface AbilityMixinWindSeedSpawner_CatchSeed {
  EntityId?: number;
}
