/* eslint-disable */
import Long from "long";
import type { Material } from "./Material";
import type { Equip } from "./Equip";
import type { Furniture } from "./Furniture";

export interface Item {
  ItemId?: number;
  Guid?: Long;
  Material?: Material | undefined;
  Equip?: Equip | undefined;
  Furniture?: Furniture | undefined;
}
