/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo.d.ts";
import type { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo.d.ts";

export interface BounceConjuringGallerySettleInfo {
  PlayerInfo?: OnlinePlayerInfo;
  DestroyedMachineCount?: number;
  FeverCount?: number;
  NormalHitCount?: number;
  Damage?: number;
  GadgetCountMap?: { [key: number]: number };
  Score?: number;
  PerfectHitCount?: number;
  CardList?: ExhibitionDisplayInfo[];
}

export interface BounceConjuringGallerySettleInfo_GadgetCountMapEntry {
  Key: number;
  Value: number;
}
