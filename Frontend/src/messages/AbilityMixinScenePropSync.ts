/* eslint-disable */
import type Long from "long";
import type { MassivePropSyncInfo } from "./MassivePropSyncInfo";

export interface AbilityMixinScenePropSync {
  DeleteIdList?: Long[];
  IsClearAll?: boolean;
  MassivePropList?: MassivePropSyncInfo[];
}
