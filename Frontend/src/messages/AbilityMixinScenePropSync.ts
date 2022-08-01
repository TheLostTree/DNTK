/* eslint-disable */
import type Long from "long";
import type { MassivePropSyncInfo } from "./MassivePropSyncInfo.ts";

export interface AbilityMixinScenePropSync {
  DeleteIdList?: Long[];
  IsClearAll?: boolean;
  MassivePropList?: MassivePropSyncInfo[];
}
