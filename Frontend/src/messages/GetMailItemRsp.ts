/* eslint-disable */
import type { EquipParam } from "./EquipParam";

/**
 * CmdId: 1407
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetMailItemRsp {
  Retcode?: number;
  MailIdList?: number[];
  ItemList?: EquipParam[];
}
