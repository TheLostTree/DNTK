/* eslint-disable */
import type Long from "long";
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo.ts";
import type { EntityRendererChangedInfo } from "./EntityRendererChangedInfo.ts";

export interface SceneWeaponInfo {
  EntityId?: number;
  GadgetId?: number;
  ItemId?: number;
  Guid?: Long;
  Level?: number;
  PromoteLevel?: number;
  AbilityInfo?: AbilitySyncStateInfo;
  AffixMap?: { [key: number]: number };
  RendererChangedInfo?: EntityRendererChangedInfo;
}

export interface SceneWeaponInfo_AffixMapEntry {
  Key: number;
  Value: number;
}
