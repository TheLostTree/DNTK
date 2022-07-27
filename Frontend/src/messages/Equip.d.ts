/* eslint-disable */
import type { Reliquary } from "./Reliquary.d.ts";
import type { Weapon } from "./Weapon.d.ts";

export interface Equip {
  IsLocked?: boolean;
  Reliquary?: Reliquary | undefined;
  Weapon?: Weapon | undefined;
}
