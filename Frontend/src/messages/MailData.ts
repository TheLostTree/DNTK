/* eslint-disable */
import type { MailTextContent } from "./MailTextContent.ts";
import type { Unk2700CBJEDMGOBPL } from "./Unk2700_CBJEDMGOBPL.ts";
import type { MailItem } from "./MailItem.ts";

export interface MailData {
  MailId?: number;
  MailTextContent?: MailTextContent;
  ItemList?: MailItem[];
  SendTime?: number;
  ExpireTime?: number;
  Importance?: number;
  IsRead?: boolean;
  IsAttachmentGot?: boolean;
  ConfigId?: number;
  ArgumentList?: string[];
  Unk2700NDPPGJKJOMH?: Unk2700CBJEDMGOBPL;
}
