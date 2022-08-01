/* eslint-disable */
import type { EntityAuthorityInfo } from "./EntityAuthorityInfo.ts";

export interface AuthorityChange {
  EntityAuthorityInfo?: EntityAuthorityInfo;
  AuthorityPeerId?: number;
  EntityId?: number;
}
