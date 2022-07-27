/* eslint-disable */
import type { DungeonEntryInfo } from "./DungeonEntryInfo.d.ts";
import type { Unk2800MHCFAGCKGIB } from "./Unk2800_MHCFAGCKGIB.d.ts";

/**
 * CmdId: 998
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DungeonEntryInfoRsp {
  DungeonEntryList?: DungeonEntryInfo[];
  PointId?: number;
  Unk2800JJFLDCLMEHD?: Unk2800MHCFAGCKGIB[];
  RecommendDungeonId?: number;
  Retcode?: number;
}
