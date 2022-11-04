import { useCallback, useEffect, useState } from "react";
import Connector from "@walletconnect/client";
import { login as loginService } from "../../domain/service/user/login";
import { User } from "../../domain/model/user";
import { Provider } from "../../infrastructure/web3/provider";

export const useLoginUseCase = (connector: Connector) => {
  const [account, setAccount] = useState<User>();
  useEffect(() => {
    if (connector.connected) {
      login();
    }
  }, [connector]);

  const login = useCallback(async () => {
    let account: string | null = null;
    if (!connector.connected) {
      const session = await connector.connect();
      account = session.accounts[0];
    } else {
      account = connector.accounts[0];
    }
    return await loginService(account).then((res) => {
      setAccount(res);
      return res;
    });
  }, [connector]);

  return {
    account,
    login,
  };
};
