import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Button,
  Provider as PaperProvider,
  TextInput,
} from "react-native-paper";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <PaperProvider>
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <View style={styles.container}>
          <TextInput
            autoComplete="email"
            label="Email"
            keyboardType="email-address"
            maxLength={256}
            mode="flat"
            onBlur={() => Keyboard.dismiss()}
            onChangeText={(email) => setEmail(email)}
            right={
              email.length > 0 ? (
                <TextInput.Icon
                  icon="close-circle-outline"
                  onPress={() => setEmail("")}
                />
              ) : null
            }
            style={{ marginBottom: 16 }}
            value={email}
          />
          <Button
            disabled={email.trim().length === 0}
            mode="contained"
            onPress={() => console.log("ouch")}
          >
            Toggle Disabled
          </Button>
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
});
