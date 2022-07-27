/* eslint-disable */
import type { CodexTypeData } from "./CodexTypeData.d.ts";

/**
 * CmdId: 4201
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ViewCodexRsp {
  Retcode?: number;
  Unk2800IPOCJIPGNEJ?: number[];
  Unk2700DFJJHFHHIHF?: number[];
  TypeDataList?: CodexTypeData[];
  Unk2800OIPJCEPGJCF?: number[];
}
