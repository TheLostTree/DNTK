/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 8673
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface MusicGameSettleRsp {
  Retcode?: number;
  MusicBasicId?: number;
  IsNewRecord?: boolean;
  IsUnlockNextLevel?: boolean;
  Unk2700CEPGMKAHHCD?: Long;
}
