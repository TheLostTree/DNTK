/* eslint-disable */
import type { Reliquary } from "./Reliquary";
import type { Weapon } from "./Weapon";

export interface Equip {
  IsLocked?: boolean;
  Reliquary?: Reliquary | undefined;
  Weapon?: Weapon | undefined;
}
