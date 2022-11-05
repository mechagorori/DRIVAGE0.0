/** @jsxImportSource @emotion/react */
import { ReactNode, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { css } from "@emotion/react"
import { useLoginUseCase } from "application/usecase/login"
import { useLoadingUseCase } from "application/usecase/loading"
import {
  ConnectAccount,
  ConnectdAccount,
} from "presentation/components/parts/button/connectAccount"
import { Loading } from "presentation/components/parts/loading"
import { black, justify_content_between, px } from "presentation/style"
import { PATHS } from "presentation/routes"

export const MainLayout = (props: { children?: ReactNode }) => {
  const navigate = useNavigate()
  const { account, login } = useLoginUseCase()
  const { loading, onChange } = useLoadingUseCase()
  const _login = useCallback(async () => {
    onChange(true)
    await login().catch((e) => {
      console.log(e)
    })
    onChange(false)
  }, [login, onChange])

  useEffect(() => {
    if (!account) navigate(PATHS.top)
  }, [account])

  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        background-color: ${black};
      `}
    >
      <header
        css={css`
          ${justify_content_between}
          padding: ${px._10};
          height: 8vh;
        `}
      >
        <div></div>
        <div>
          {!account ? <ConnectAccount onClick={_login} /> : <ConnectdAccount />}
        </div>
      </header>
      <main
        css={css`
          height: 92vh;
          padding: ${px._10};
        `}
      >
        {props?.children}
      </main>
      {loading && <Loading />}
    </div>
  )
}
