/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

/**
 * CmdId: 280
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PersonalSceneJumpRsp {
  DestSceneId?: number;
  Retcode?: number;
  DestPos?: Vector;
}
