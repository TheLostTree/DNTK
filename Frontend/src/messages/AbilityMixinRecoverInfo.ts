/* eslint-disable */
import type { MassivePropSyncInfo } from "./MassivePropSyncInfo";

export interface AbilityMixinRecoverInfo {
  LocalId?: number;
  DataList?: number[];
  IsServerbuffModifier?: boolean;
  MassivePropList?: MassivePropSyncInfo[];
  InstancedAbilityId?: number | undefined;
  InstancedModifierId?: number | undefined;
}
