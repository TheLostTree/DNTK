/* eslint-disable */
import type { SkillRequest } from "./SkillRequest.d.ts";
import type { ReliquaryRequest } from "./ReliquaryRequest.d.ts";
import type { Unk2800JBEDBFJFEIH } from "./Unk2800_JBEDBFJFEIH.d.ts";

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
