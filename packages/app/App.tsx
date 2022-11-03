import "./global";
import "./shim";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthClient from "@walletconnect/auth-client";
import "./src/infrastructure/firebase";

export default function App() {
  useEffect(() => {
    AuthClient.init({
      relayUrl: "wss://relay.walletconnect.com",
      projectId: "5290f7b69e00c31799bec49e5d9d02d2",
      metadata: {
        name: "react-dapp-auth",
        description: "React Example Dapp for Auth",
        url: "",
        icons: [],
      },
    })
      .then((authClient) => {
        console.log(authClient);
      })
      .catch(console.error);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
