/* eslint-disable */
import type { ProtEntityType } from "./ProtEntityType.ts";
import type { MotionInfo } from "./MotionInfo.ts";
import type { EntityClientData } from "./EntityClientData.ts";
import type { EntityAuthorityInfo } from "./EntityAuthorityInfo.ts";
import type { PropPair } from "./PropPair.ts";
import type { FightPropPair } from "./FightPropPair.ts";
import type { AnimatorParameterValueInfoPair } from "./AnimatorParameterValueInfoPair.ts";
import type { EntityEnvironmentInfo } from "./EntityEnvironmentInfo.ts";
import type { ServerBuff } from "./ServerBuff.ts";
import type { SceneAvatarInfo } from "./SceneAvatarInfo.ts";
import type { SceneMonsterInfo } from "./SceneMonsterInfo.ts";
import type { SceneNpcInfo } from "./SceneNpcInfo.ts";
import type { SceneGadgetInfo } from "./SceneGadgetInfo.ts";

export interface SceneEntityInfo {
  EntityType?: ProtEntityType;
  EntityId?: number;
  Name?: string;
  MotionInfo?: MotionInfo;
  PropList?: PropPair[];
  FightPropList?: FightPropPair[];
  LifeState?: number;
  AnimatorParaList?: AnimatorParameterValueInfoPair[];
  LastMoveSceneTimeMs?: number;
  LastMoveReliableSeq?: number;
  EntityClientData?: EntityClientData;
  EntityEnvironmentInfoList?: EntityEnvironmentInfo[];
  EntityAuthorityInfo?: EntityAuthorityInfo;
  TagList?: string[];
  ServerBuffList?: ServerBuff[];
  Avatar?: SceneAvatarInfo | undefined;
  Monster?: SceneMonsterInfo | undefined;
  Npc?: SceneNpcInfo | undefined;
  Gadget?: SceneGadgetInfo | undefined;
}
