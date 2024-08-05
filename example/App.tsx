import { Button, StyleSheet, Text, View } from "react-native";

import * as ExpoSettings from "expo-settings";
import { useEffect, useState } from "react";

export type ThemeType = "light" | "dark" | "system";

export default function App() {
  const [theme, setTheme] = useState<ThemeType>(ExpoSettings.getTheme());

  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const subscription = ExpoSettings.addThemeChangeListener(({ theme }) => {
      setTheme(theme);
    });
    return () => {
      subscription.remove();
    };
  });
  return (
    <View style={styles.container}>
      <Text>Theme: {theme}</Text>
      <Button
        title={`Change Theme to ${nextTheme}`}
        onPress={() => ExpoSettings.setTheme(nextTheme)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
