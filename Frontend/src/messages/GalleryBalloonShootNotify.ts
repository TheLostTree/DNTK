/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 5598
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GalleryBalloonShootNotify {
  TriggerEntityId?: number;
  GalleryId?: number;
  Combo?: number;
  ComboDisableTime?: Long;
  AddScore?: number;
  CurScore?: number;
}
