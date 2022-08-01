/* eslint-disable */
import type Long from "long";
import type { Unk2700OPEBMJPOOBL } from "./Unk2700_OPEBMJPOOBL";
import type { DropSubfieldType } from "./DropSubfieldType";
import type { MusicRecord } from "./MusicRecord";
import type { MusicBriefInfo } from "./MusicBriefInfo";

/**
 * CmdId: 6318
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface Unk2700IPGJEAEFJMMServerRsp {
  Unk2700CEPGMKAHHCD?: Long;
  Unk2700KHBDAPGDOJA?: Unk2700OPEBMJPOOBL;
  Retcode?: number;
  Unk2700MJNIHFCKJMN?: DropSubfieldType;
  MusicRecord?: MusicRecord | undefined;
  MusicBriefInfo?: MusicBriefInfo | undefined;
}
