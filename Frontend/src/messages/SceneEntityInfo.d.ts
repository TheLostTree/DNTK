/* eslint-disable */
import type { ProtEntityType } from "./ProtEntityType.d.ts";
import type { MotionInfo } from "./MotionInfo.d.ts";
import type { EntityClientData } from "./EntityClientData.d.ts";
import type { EntityAuthorityInfo } from "./EntityAuthorityInfo.d.ts";
import type { PropPair } from "./PropPair.d.ts";
import type { FightPropPair } from "./FightPropPair.d.ts";
import type { AnimatorParameterValueInfoPair } from "./AnimatorParameterValueInfoPair.d.ts";
import type { EntityEnvironmentInfo } from "./EntityEnvironmentInfo.d.ts";
import type { ServerBuff } from "./ServerBuff.d.ts";
import type { SceneAvatarInfo } from "./SceneAvatarInfo.d.ts";
import type { SceneMonsterInfo } from "./SceneMonsterInfo.d.ts";
import type { SceneNpcInfo } from "./SceneNpcInfo.d.ts";
import type { SceneGadgetInfo } from "./SceneGadgetInfo.d.ts";

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
