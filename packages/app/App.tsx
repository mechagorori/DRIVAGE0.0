import "@walletconnect/react-native-compat";
import "./shim";
import {
  withWalletConnect,
  useWalletConnect,
} from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./src/infrastructure/firebase";
import React from "react";
import { Platform } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";

function App() {
  const connector = useWalletConnect();
  if (!connector.connected) {
    return <Button title="Connect" onPress={() => connector.connect()} />;
  }
  return (
    <Button title="Kill Session" onPress={() => connector.killSession()} />
  );
}

export default withWalletConnect(App, {
  redirectUrl:
    Platform.OS === "web" ? window.location.origin : "yourappscheme://",
  storageOptions: {
    // @ts-ignore
    asyncStorage: AsyncStorage,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
