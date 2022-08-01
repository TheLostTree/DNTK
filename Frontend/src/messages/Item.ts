/* eslint-disable */
import type Long from "long";
import type { Material } from "./Material.ts";
import type { Equip } from "./Equip.ts";
import type { Furniture } from "./Furniture.ts";

export interface Item {
  ItemId?: number;
  Guid?: Long;
  Material?: Material | undefined;
  Equip?: Equip | undefined;
  Furniture?: Furniture | undefined;
}
