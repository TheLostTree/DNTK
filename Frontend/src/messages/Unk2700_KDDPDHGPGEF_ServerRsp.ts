/* eslint-disable */
import type { SkillResponse } from "./SkillResponse.ts";
import type { ReliquaryResponse } from "./ReliquaryResponse.ts";
import type { Unk2800OCOMLNLPLGA } from "./Unk2800_OCOMLNLPLGA.ts";

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
