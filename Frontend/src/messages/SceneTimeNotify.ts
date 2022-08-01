/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 245
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneTimeNotify {
  SceneTime?: Long;
  IsPaused?: boolean;
  SceneId?: number;
}
