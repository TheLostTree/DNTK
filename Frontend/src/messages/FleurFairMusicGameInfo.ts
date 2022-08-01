/* eslint-disable */
import type { FleurFairMusicRecord } from "./FleurFairMusicRecord";

export interface FleurFairMusicGameInfo {
  MusicRecordMap?: { [key: number]: FleurFairMusicRecord };
}

export interface FleurFairMusicGameInfo_MusicRecordMapEntry {
  Key: number;
  Value?: FleurFairMusicRecord;
}
