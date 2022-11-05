import React, { useMemo } from "react"
import { Global, css } from "@emotion/react"
import { ethers } from "ethers"
import { useLoginUseCase } from "../application/usecase/login"
import { carCreator } from "../domain/service/car/creator"
import { ress, base, fonts } from "./style"

function App() {
  const { ethereum } = window as any
  const { login, account } = useLoginUseCase()
  const provider = useMemo(() => {
    if (!ethereum) return null
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    console.log(signer)
    return provider
  }, [ethereum])
  return (
    <>
      <Global
        styles={css`
          ${ress}
          ${base}
          ${fonts}
        `}
      />
      <div className="App">
        {!account ? (
          <div
            onClick={() =>
              login().then(
                async (res) =>
                  res && (await carCreator(res.getAddress(), ethereum))
              )
            }
          >
            connect
          </div>
        ) : (
          <div>{account.getName() || account.getAddress()}</div>
        )}
      </div>
    </>
  )
}

export default App
