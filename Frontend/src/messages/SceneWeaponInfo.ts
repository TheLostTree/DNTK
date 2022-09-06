/* eslint-disable */
import Long from "long";
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
import type { EntityRendererChangedInfo } from "./EntityRendererChangedInfo";

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
