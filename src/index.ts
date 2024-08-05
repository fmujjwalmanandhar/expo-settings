// Import the native module. On web, it will be resolved to ExpoSettings.web.ts
// and on native platforms to ExpoSettings.ts
import { EventEmitter, Subscription } from "expo-modules-core";
import ExpoSettingsModule from "./ExpoSettingsModule";

//To subscribe to these events in JavaScript/TypeScript, you need to wrap the native module with EventEmitter
const emitter = new EventEmitter(ExpoSettingsModule);
export type Theme = "light" | "dark" | "system";
export type ThemeChangeEvent = {
  theme: Theme;
};

export function addThemeChangeListener(
  listener: (event: ThemeChangeEvent) => void
): Subscription {
  return emitter.addListener<ThemeChangeEvent>("onChangeTheme", listener);
}

export function getTheme(): Theme {
  return ExpoSettingsModule.getTheme();
}

export function setTheme(theme: Theme): void {
  return ExpoSettingsModule.setTheme(theme);
}
