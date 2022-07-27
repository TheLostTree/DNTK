/* eslint-disable */
export interface Weapon {
  Level?: number;
  Exp?: number;
  PromoteLevel?: number;
  AffixMap?: { [key: number]: number };
}

export interface Weapon_AffixMapEntry {
  Key: number;
  Value: number;
}
