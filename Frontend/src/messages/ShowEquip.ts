/* eslint-disable */
import type { Reliquary } from "./Reliquary";
import type { Weapon } from "./Weapon";

export interface ShowEquip {
  ItemId?: number;
  Reliquary?: Reliquary | undefined;
  Weapon?: Weapon | undefined;
}
