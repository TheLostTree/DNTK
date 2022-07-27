/* eslint-disable */
import type { ProfilePicture } from "./ProfilePicture.d.ts";

export interface PlantFlowerRecvFlowerData {
  ProfilePicture?: ProfilePicture;
  Nickname?: string;
  Uid?: number;
  FlowerNumMap?: { [key: number]: number };
}

export interface PlantFlowerRecvFlowerData_FlowerNumMapEntry {
  Key: number;
  Value: number;
}
