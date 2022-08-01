/* eslint-disable */
import type { MusicGameRecord } from "./MusicGameRecord.ts";
import type { MusicBriefInfo } from "./MusicBriefInfo.ts";

export interface MusicGameActivityDetailInfo {
  Unk2700HMNHCPMFDCP?: MusicBriefInfo[];
  Unk2700FOFAFGKAEJM?: MusicBriefInfo[];
  MusicGameRecordMap?: { [key: number]: MusicGameRecord };
}

export interface MusicGameActivityDetailInfo_MusicGameRecordMapEntry {
  Key: number;
  Value?: MusicGameRecord;
}
