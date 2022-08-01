/* eslint-disable */
import type { SkillRequest } from "./SkillRequest";
import type { ReliquaryRequest } from "./ReliquaryRequest";
import type { Unk2800JBEDBFJFEIH } from "./Unk2800_JBEDBFJFEIH";

/**
 * CmdId: 151
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface Unk2700EAGIANJBNGKClientReq {
  AvatarId?: number;
  SkillRequest?: SkillRequest | undefined;
  ReliquaryRequest?: ReliquaryRequest | undefined;
  ElementReliquaryRequest?: Unk2800JBEDBFJFEIH | undefined;
}
