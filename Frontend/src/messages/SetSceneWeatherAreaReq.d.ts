/* eslint-disable */
/**
 * CmdId: 254
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SetSceneWeatherAreaReq {
  WeatherGadgetId?: number;
  WeatherValueMap?: { [key: number]: string };
}

export interface SetSceneWeatherAreaReq_WeatherValueMapEntry {
  Key: number;
  Value: string;
}
