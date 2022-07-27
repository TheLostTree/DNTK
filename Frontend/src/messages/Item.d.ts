/* eslint-disable */
import type Long from "long";
import type { Material } from "./Material.d.ts";
import type { Equip } from "./Equip.d.ts";
import type { Furniture } from "./Furniture.d.ts";

export interface Item {
  ItemId?: number;
  Guid?: Long;
  Material?: Material | undefined;
  Equip?: Equip | undefined;
  Furniture?: Furniture | undefined;
}
