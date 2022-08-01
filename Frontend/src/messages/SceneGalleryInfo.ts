/* eslint-disable */
import type { GalleryStageType } from "./GalleryStageType";
import type { SceneGalleryProgressInfo } from "./SceneGalleryProgressInfo";
import type { SceneGalleryBalloonInfo } from "./SceneGalleryBalloonInfo";
import type { SceneGalleryFallInfo } from "./SceneGalleryFallInfo";
import type { SceneGalleryFlowerInfo } from "./SceneGalleryFlowerInfo";
import type { SceneGalleryBulletInfo } from "./SceneGalleryBulletInfo";
import type { SceneGalleryBrokenFloorInfo } from "./SceneGalleryBrokenFloorInfo";
import type { SceneGalleryHideAndSeekInfo } from "./SceneGalleryHideAndSeekInfo";
import type { SceneGalleryBuoyantCombatInfo } from "./SceneGalleryBuoyantCombatInfo";
import type { SceneGalleryBounceConjuringInfo } from "./SceneGalleryBounceConjuringInfo";
import type { SceneGalleryHandballInfo } from "./SceneGalleryHandballInfo";
import type { SceneGallerySumoInfo } from "./SceneGallerySumoInfo";
import type { SceneGallerySalvagePreventInfo } from "./SceneGallerySalvagePreventInfo";
import type { SceneGallerySalvageEscortInfoInfo } from "./SceneGallerySalvageEscortInfoInfo";
import type { SceneGalleryHomeBalloonInfo } from "./SceneGalleryHomeBalloonInfo";
import type { SceneGalleryCrystalLinkInfo } from "./SceneGalleryCrystalLinkInfo";
import type { SceneGalleryIrodoriMasterInfo } from "./SceneGalleryIrodoriMasterInfo";
import type { SceneGalleryLuminanceStoneChallengeInfo } from "./SceneGalleryLuminanceStoneChallengeInfo";
import type { SceneGalleryHomeSeekFurnitureInfo } from "./SceneGalleryHomeSeekFurnitureInfo";
import type { SceneGalleryIslandPartyDownHillInfo } from "./SceneGalleryIslandPartyDownHillInfo";
import type { SceneGallerySummerTimeV2BoatInfo } from "./SceneGallerySummerTimeV2BoatInfo";
import type { SceneGalleryIslandPartyRaftInfo } from "./SceneGalleryIslandPartyRaftInfo";
import type { SceneGalleryIslandPartySailInfo } from "./SceneGalleryIslandPartySailInfo";

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
