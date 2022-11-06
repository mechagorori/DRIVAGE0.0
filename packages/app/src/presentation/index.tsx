import React from "react"
import { RecoilRoot } from "recoil"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Global, css } from "@emotion/react"
import { HashRouter, Route, Navigate, Routes } from "react-router-dom"
import { ress, base, fonts } from "./style"
import { ROUTES, PATHS } from "./routes"
import { Loading } from "./components/parts/loading"

function App() {
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
          <Router />
          <ToastContainer />
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
