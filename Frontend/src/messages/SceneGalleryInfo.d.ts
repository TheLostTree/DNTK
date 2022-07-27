/* eslint-disable */
import type { GalleryStageType } from "./GalleryStageType.d.ts";
import type { SceneGalleryProgressInfo } from "./SceneGalleryProgressInfo.d.ts";
import type { SceneGalleryBalloonInfo } from "./SceneGalleryBalloonInfo.d.ts";
import type { SceneGalleryFallInfo } from "./SceneGalleryFallInfo.d.ts";
import type { SceneGalleryFlowerInfo } from "./SceneGalleryFlowerInfo.d.ts";
import type { SceneGalleryBulletInfo } from "./SceneGalleryBulletInfo.d.ts";
import type { SceneGalleryBrokenFloorInfo } from "./SceneGalleryBrokenFloorInfo.d.ts";
import type { SceneGalleryHideAndSeekInfo } from "./SceneGalleryHideAndSeekInfo.d.ts";
import type { SceneGalleryBuoyantCombatInfo } from "./SceneGalleryBuoyantCombatInfo.d.ts";
import type { SceneGalleryBounceConjuringInfo } from "./SceneGalleryBounceConjuringInfo.d.ts";
import type { SceneGalleryHandballInfo } from "./SceneGalleryHandballInfo.d.ts";
import type { SceneGallerySumoInfo } from "./SceneGallerySumoInfo.d.ts";
import type { SceneGallerySalvagePreventInfo } from "./SceneGallerySalvagePreventInfo.d.ts";
import type { SceneGallerySalvageEscortInfoInfo } from "./SceneGallerySalvageEscortInfoInfo.d.ts";
import type { SceneGalleryHomeBalloonInfo } from "./SceneGalleryHomeBalloonInfo.d.ts";
import type { SceneGalleryCrystalLinkInfo } from "./SceneGalleryCrystalLinkInfo.d.ts";
import type { SceneGalleryIrodoriMasterInfo } from "./SceneGalleryIrodoriMasterInfo.d.ts";
import type { SceneGalleryLuminanceStoneChallengeInfo } from "./SceneGalleryLuminanceStoneChallengeInfo.d.ts";
import type { SceneGalleryHomeSeekFurnitureInfo } from "./SceneGalleryHomeSeekFurnitureInfo.d.ts";
import type { SceneGalleryIslandPartyDownHillInfo } from "./SceneGalleryIslandPartyDownHillInfo.d.ts";
import type { SceneGallerySummerTimeV2BoatInfo } from "./SceneGallerySummerTimeV2BoatInfo.d.ts";
import type { SceneGalleryIslandPartyRaftInfo } from "./SceneGalleryIslandPartyRaftInfo.d.ts";
import type { SceneGalleryIslandPartySailInfo } from "./SceneGalleryIslandPartySailInfo.d.ts";

export interface SceneGalleryInfo {
  EndTime?: number;
  PreStartEndTime?: number;
  Stage?: GalleryStageType;
  OwnerUid?: number;
  PlayerCount?: number;
  ProgressInfoList?: SceneGalleryProgressInfo[];
  GalleryId?: number;
  BalloonInfo?: SceneGalleryBalloonInfo | undefined;
  FallInfo?: SceneGalleryFallInfo | undefined;
  FlowerInfo?: SceneGalleryFlowerInfo | undefined;
  BulletInfo?: SceneGalleryBulletInfo | undefined;
  BrokenFloorInfo?: SceneGalleryBrokenFloorInfo | undefined;
  HideAndSeekInfo?: SceneGalleryHideAndSeekInfo | undefined;
  BuoyantCombatInfo?: SceneGalleryBuoyantCombatInfo | undefined;
  BounceConjuringInfo?: SceneGalleryBounceConjuringInfo | undefined;
  HandballInfo?: SceneGalleryHandballInfo | undefined;
  SumoInfo?: SceneGallerySumoInfo | undefined;
  SalvagePreventInfo?: SceneGallerySalvagePreventInfo | undefined;
  SalvageEscortInfo?: SceneGallerySalvageEscortInfoInfo | undefined;
  HomeBalloonInfo?: SceneGalleryHomeBalloonInfo | undefined;
  CrystalLinkInfo?: SceneGalleryCrystalLinkInfo | undefined;
  IrodoriMasterInfo?: SceneGalleryIrodoriMasterInfo | undefined;
  LuminanceStoneChallengeInfo?:
    | SceneGalleryLuminanceStoneChallengeInfo
    | undefined;
  HomeSeekFurnitureInfo?: SceneGalleryHomeSeekFurnitureInfo | undefined;
  IslandPartyDownHillInfo?: SceneGalleryIslandPartyDownHillInfo | undefined;
  SummerTimeV2BoatInfo?: SceneGallerySummerTimeV2BoatInfo | undefined;
  IslandPartyRaftInfo?: SceneGalleryIslandPartyRaftInfo | undefined;
  IslandPartySailInfo?: SceneGalleryIslandPartySailInfo | undefined;
}
