/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import Long from "long";
import type { Vector } from "./Vector";

/**
 * CmdId: 307
 * EnetChannelId: 0
 * EnetIsReliable: false
 * IsAllowClient: true
 */
export interface EvtCreateGadgetNotify {
  IsAsyncLoad?: boolean;
  CampType?: number;
  SightGroupWithOwner?: boolean;
  Unk2700BELOIHEIEAN?: number[];
  ForwardType?: ForwardType;
  EntityId?: number;
  TargetEntityId?: number;
  CampId?: number;
  Guid?: Long;
  InitEulerAngles?: Vector;
  TargetLockPointIndex?: number;
  Unk2700JDNFLLGJBGA?: number[];
  InitPos?: Vector;
  OwnerEntityId?: number;
  RoomId?: number;
  Unk2700JBOPENAGGAF?: boolean;
  PropOwnerEntityId?: number;
  Unk2700IHIDGKPHFME?: boolean;
  ConfigId?: number;
}
