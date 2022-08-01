/* eslint-disable */
import type Long from "long";
import type { Unk2700OPEBMJPOOBL } from "./Unk2700_OPEBMJPOOBL.ts";
import type { MusicBriefInfo } from "./MusicBriefInfo.ts";

/**
 * CmdId: 6307
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface Unk2700JJAFAJIKDDKServerRsp {
  Unk2700CEPGMKAHHCD?: Long;
  Unk2700KHBDAPGDOJA?: Unk2700OPEBMJPOOBL;
  Retcode?: number;
  MusicBriefInfo?: MusicBriefInfo | undefined;
}
