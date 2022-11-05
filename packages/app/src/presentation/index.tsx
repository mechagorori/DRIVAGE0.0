import React, { useMemo } from "react"
import { RecoilRoot } from "recoil"
import { Global, css } from "@emotion/react"
import { HashRouter, Route, Navigate, Routes } from "react-router-dom"
import { ethers } from "ethers"
import { useLoginUseCase } from "../application/usecase/login"
import { carCreator } from "../domain/service/car/creator"
import { ress, base, fonts } from "./style"
import { ROUTES, PATHS } from "./routes"
import { Loading } from "./components/parts/loading"

function App() {
  // const { ethereum } = window as any
  // const { login, account } = useLoginUseCase()
  // const provider = useMemo(() => {
  //   if (!ethereum) return null
  //   const provider = new ethers.providers.Web3Provider(ethereum)
  //   const signer = provider.getSigner()
  //   console.log(signer)
  //   return provider
  // }, [ethereum])
  return (
    <>
      <HashRouter>
        <RecoilRoot>
          <Global
            styles={css`
              ${ress}
              ${base}
          ${fonts}
            `}
          />
          {/* <div className="App">
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
          </div> */}
          <Router />
        </RecoilRoot>
      </HashRouter>
    </>
  )
}

const Router = () => {
  return (
    <Routes>
      {ROUTES.map((route, index) => (
        <React.Fragment key={index}>
          <Route
            path={route.path}
            element={
              <React.Suspense fallback={<Loading />}>
                {route.element}
              </React.Suspense>
            }
          />
        </React.Fragment>
      ))}
      <Route path={"/"} element={<Navigate to={PATHS.top} replace />} />
    </Routes>
  )
}

export default App
