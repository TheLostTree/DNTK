/* eslint-disable */
import type { FleurFairMusicRecord } from "./FleurFairMusicRecord.d.ts";

export interface FleurFairMusicGameInfo {
  MusicRecordMap?: { [key: number]: FleurFairMusicRecord };
}

export interface FleurFairMusicGameInfo_MusicRecordMapEntry {
  Key: number;
  Value?: FleurFairMusicRecord;
}
