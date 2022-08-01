/* eslint-disable */
import type { Reliquary } from "./Reliquary.ts";
import type { Weapon } from "./Weapon.ts";

export interface Equip {
  IsLocked?: boolean;
  Reliquary?: Reliquary | undefined;
  Weapon?: Weapon | undefined;
}
