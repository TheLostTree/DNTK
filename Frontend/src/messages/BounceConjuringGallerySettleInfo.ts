/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo";
import type { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo";

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
