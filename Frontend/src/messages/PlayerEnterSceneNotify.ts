/* eslint-disable */
import type { EnterType } from "./EnterType.ts";
import type Long from "long";
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 272
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerEnterSceneNotify {
  PrevSceneId?: number;
  DungeonId?: number;
  IsSkipUi?: boolean;
  SceneId?: number;
  Type?: EnterType;
  SceneBeginTime?: Long;
  WorldLevel?: number;
  WorldType?: number;
  TargetUid?: number;
  IsFirstLoginEnterScene?: boolean;
  SceneTagIdList?: number[];
  SceneTransaction?: string;
  PrevPos?: Vector;
  EnterReason?: number;
  Pos?: Vector;
  EnterSceneToken?: number;
}
