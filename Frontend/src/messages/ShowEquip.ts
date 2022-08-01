/* eslint-disable */
import type { Reliquary } from "./Reliquary.ts";
import type { Weapon } from "./Weapon.ts";

export interface ShowEquip {
  ItemId?: number;
  Reliquary?: Reliquary | undefined;
  Weapon?: Weapon | undefined;
}
