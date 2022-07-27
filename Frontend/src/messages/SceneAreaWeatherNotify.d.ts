/* eslint-disable */
/**
 * CmdId: 230
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneAreaWeatherNotify {
  WeatherAreaId?: number;
  WeatherGadgetId?: number;
  ClimateType?: number;
  TransDuration?: number;
  WeatherValueMap?: { [key: number]: string };
}

export interface SceneAreaWeatherNotify_WeatherValueMapEntry {
  Key: number;
  Value: string;
}
