/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

/**
 * CmdId: 233
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ScenePlayerSoundNotify {
  SoundName?: string;
  PlayType?: ScenePlayerSoundNotify_PlaySoundType;
  PlayPos?: Vector;
}

export enum ScenePlayerSoundNotify_PlaySoundType {
  PLAY_SOUND_TYPE_NONE = 0,
  PLAY_SOUND_TYPE_START = 1,
  PLAY_SOUND_TYPE_STOP = 2,
  UNRECOGNIZED = -1,
}
