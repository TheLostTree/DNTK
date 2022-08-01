/* eslint-disable */
import type { ProtEntityType } from "./ProtEntityType";
import type { MotionInfo } from "./MotionInfo";
import type { EntityClientData } from "./EntityClientData";
import type { EntityAuthorityInfo } from "./EntityAuthorityInfo";
import type { PropPair } from "./PropPair";
import type { FightPropPair } from "./FightPropPair";
import type { AnimatorParameterValueInfoPair } from "./AnimatorParameterValueInfoPair";
import type { EntityEnvironmentInfo } from "./EntityEnvironmentInfo";
import type { ServerBuff } from "./ServerBuff";
import type { SceneAvatarInfo } from "./SceneAvatarInfo";
import type { SceneMonsterInfo } from "./SceneMonsterInfo";
import type { SceneNpcInfo } from "./SceneNpcInfo";
import type { SceneGadgetInfo } from "./SceneGadgetInfo";

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
