/* eslint-disable */
import type { ServerLogType } from "./ServerLogType.d.ts";
import type { ServerLogLevel } from "./ServerLogLevel.d.ts";

/**
 * CmdId: 31
 * EnetChannelId: 1
 * EnetIsReliable: true
 */
export interface ServerLogNotify {
  ServerLog?: string;
  LogType?: ServerLogType;
  LogLevel?: ServerLogLevel;
}
