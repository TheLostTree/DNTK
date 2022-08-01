/* eslint-disable */
import type { SkillResponse } from "./SkillResponse";
import type { ReliquaryResponse } from "./ReliquaryResponse";
import type { Unk2800OCOMLNLPLGA } from "./Unk2800_OCOMLNLPLGA";

/**
 * CmdId: 123
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface Unk2700KDDPDHGPGEFServerRsp {
  Retcode?: number;
  AvatarId?: number;
  SkillResponse?: SkillResponse | undefined;
  ReliquaryResponse?: ReliquaryResponse | undefined;
  ElementReliquaryResponse?: Unk2800OCOMLNLPLGA | undefined;
}
