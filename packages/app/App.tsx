import "./shim";
import "./global";
import "@walletconnect/react-native-compat";
import "@ethersproject/shims";
import {
  withWalletConnect,
  useWalletConnect,
  RenderQrcodeModalProps,
  WalletService,
} from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./src/infrastructure/firebase";
import * as React from "react";
import { Platform } from "react-native";
import {
  StyleSheet,
  Button,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Provider } from "./src/infrastructure/web3/provider";
import {
  ContractFactory,
  StandardCar,
} from "./src/infrastructure/web3/contract";
import { useLoginUseCase } from "./src/application/usecase/login";
import { carCreator } from "./src/domain/service/car/creator";

function App() {
  const connector = useWalletConnect();
  const { login } = useLoginUseCase(connector);
  const test = async (address: string) => {
    const provider = await Provider.build().catch((e) => {
      console.log(`build: ${e}`);
      throw e;
    });
    const contract = ContractFactory.build(new StandardCar(), provider);
    console.log(`Address: ${address}`);
    console.log(`Balance: ${await provider.getBalance(address)}`);
    // console.log(await contract.mint(address));
  };
  return (
    <View style={styles.container}>
      {!connector.connected ? (
        <Button
          title="Connect"
          onPress={() =>
            login().then(
              async (res) => res && (await carCreator(res?.getAddress()))
            )
          }
        />
      ) : (
        <Button title="Kill Session" onPress={() => connector.killSession()} />
      )}
    </View>
  );
}

export default withWalletConnect(App, {
  redirectUrl:
    Platform.OS === "web" ? window.location.origin : "yourappscheme://",
  storageOptions: {
    // @ts-ignore
    asyncStorage: AsyncStorage,
  },
  clientMeta: {
    url: "http://drivage.com",
    icons: [
      "https://firebasestorage.googleapis.com/v0/b/drivage-ac98e.appspot.com/o/icon%2Fdrivage-icon.png?alt=media&token=2f7e7e0f-1e98-4310-af4b-e0ebc7c4d2b5",
    ],
    name: "DRIVAGE",
    description: "Connect with WalletConnect",
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
