/* eslint-disable */
import type { MonsterBornType } from "./MonsterBornType";
import type { MonsterRoute } from "./MonsterRoute";
import type { SceneWeaponInfo } from "./SceneWeaponInfo";
import type { SceneFishInfo } from "./SceneFishInfo";
import type { Unk3000GNOPDGELABH } from "./Unk3000_GNOPDGELABH";

export interface SceneMonsterInfo {
  MonsterId?: number;
  GroupId?: number;
  ConfigId?: number;
  WeaponList?: SceneWeaponInfo[];
  AuthorityPeerId?: number;
  AffixList?: number[];
  IsElite?: boolean;
  OwnerEntityId?: number;
  SummonedTag?: number;
  SummonTagMap?: { [key: number]: number };
  PoseId?: number;
  BornType?: MonsterBornType;
  BlockId?: number;
  MarkFlag?: number;
  TitleId?: number;
  SpecialNameId?: number;
  AttackTargetId?: number;
  MonsterRoute?: MonsterRoute;
  AiConfigId?: number;
  LevelRouteId?: number;
  InitPoseId?: number;
  Unk2800JEGLENPDPNI?: boolean;
  Unk3000CCKJDCBDEKD?: number;
  FishInfo?: SceneFishInfo | undefined;
  FishtankFishInfo?: Unk3000GNOPDGELABH | undefined;
}

export interface SceneMonsterInfo_SummonTagMapEntry {
  Key: number;
  Value: number;
}
