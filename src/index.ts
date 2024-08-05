// Import the native module. On web, it will be resolved to ExpoSettings.web.ts
// and on native platforms to ExpoSettings.ts
import ExpoSettingsModule from "./ExpoSettingsModule";

export function getTheme(): string {
  return ExpoSettingsModule.getTheme();
}
