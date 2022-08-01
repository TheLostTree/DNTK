/* eslint-disable */
import type { GachaInfo } from "./GachaInfo";

/**
 * CmdId: 1598
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetGachaInfoRsp {
  Unk2700LEEPELHDING?: boolean;
  Retcode?: number;
  GachaRandom?: number;
  Unk2700OJKKHDLEDCI?: number;
  GachaInfoList?: GachaInfo[];
}
