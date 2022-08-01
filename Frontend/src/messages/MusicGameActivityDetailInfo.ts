/* eslint-disable */
import type { MusicGameRecord } from "./MusicGameRecord";
import type { MusicBriefInfo } from "./MusicBriefInfo";

export interface MusicGameActivityDetailInfo {
  Unk2700HMNHCPMFDCP?: MusicBriefInfo[];
  Unk2700FOFAFGKAEJM?: MusicBriefInfo[];
  MusicGameRecordMap?: { [key: number]: MusicGameRecord };
}

export interface MusicGameActivityDetailInfo_MusicGameRecordMapEntry {
  Key: number;
  Value?: MusicGameRecord;
}
