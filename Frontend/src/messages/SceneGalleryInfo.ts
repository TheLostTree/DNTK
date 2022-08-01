/* eslint-disable */
import type { GalleryStageType } from "./GalleryStageType.ts";
import type { SceneGalleryProgressInfo } from "./SceneGalleryProgressInfo.ts";
import type { SceneGalleryBalloonInfo } from "./SceneGalleryBalloonInfo.ts";
import type { SceneGalleryFallInfo } from "./SceneGalleryFallInfo.ts";
import type { SceneGalleryFlowerInfo } from "./SceneGalleryFlowerInfo.ts";
import type { SceneGalleryBulletInfo } from "./SceneGalleryBulletInfo.ts";
import type { SceneGalleryBrokenFloorInfo } from "./SceneGalleryBrokenFloorInfo.ts";
import type { SceneGalleryHideAndSeekInfo } from "./SceneGalleryHideAndSeekInfo.ts";
import type { SceneGalleryBuoyantCombatInfo } from "./SceneGalleryBuoyantCombatInfo.ts";
import type { SceneGalleryBounceConjuringInfo } from "./SceneGalleryBounceConjuringInfo.ts";
import type { SceneGalleryHandballInfo } from "./SceneGalleryHandballInfo.ts";
import type { SceneGallerySumoInfo } from "./SceneGallerySumoInfo.ts";
import type { SceneGallerySalvagePreventInfo } from "./SceneGallerySalvagePreventInfo.ts";
import type { SceneGallerySalvageEscortInfoInfo } from "./SceneGallerySalvageEscortInfoInfo.ts";
import type { SceneGalleryHomeBalloonInfo } from "./SceneGalleryHomeBalloonInfo.ts";
import type { SceneGalleryCrystalLinkInfo } from "./SceneGalleryCrystalLinkInfo.ts";
import type { SceneGalleryIrodoriMasterInfo } from "./SceneGalleryIrodoriMasterInfo.ts";
import type { SceneGalleryLuminanceStoneChallengeInfo } from "./SceneGalleryLuminanceStoneChallengeInfo.ts";
import type { SceneGalleryHomeSeekFurnitureInfo } from "./SceneGalleryHomeSeekFurnitureInfo.ts";
import type { SceneGalleryIslandPartyDownHillInfo } from "./SceneGalleryIslandPartyDownHillInfo.ts";
import type { SceneGallerySummerTimeV2BoatInfo } from "./SceneGallerySummerTimeV2BoatInfo.ts";
import type { SceneGalleryIslandPartyRaftInfo } from "./SceneGalleryIslandPartyRaftInfo.ts";
import type { SceneGalleryIslandPartySailInfo } from "./SceneGalleryIslandPartySailInfo.ts";

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
