/* eslint-disable */
import type { MailTextContent } from "./MailTextContent";
import type { Unk2700CBJEDMGOBPL } from "./Unk2700_CBJEDMGOBPL";
import type { MailItem } from "./MailItem";

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
