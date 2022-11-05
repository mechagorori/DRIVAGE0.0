/** @jsxImportSource @emotion/react */
import { ReactNode, useCallback } from "react"
import { css } from "@emotion/react"
import { useLoginUseCase } from "application/usecase/login"
import { useLoadingUseCase } from "application/usecase/loading"
import { ConnectAccount } from "presentation/components/parts/button/connectAccount"
import { Loading } from "presentation/components/parts/loading"
import { black, justify_content_between, px } from "presentation/style"

export const MainLayout = (props: { children?: ReactNode }) => {
  const { account, login } = useLoginUseCase()
  const { loading, onChange } = useLoadingUseCase()
  const _login = useCallback(async () => {
    onChange(true)
    await login().catch((e) => {
      console.log(e)
    })
    onChange(false)
  }, [login, onChange])

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
        `}
      >
        <div></div>
        <div>
          {!account ? (
            <ConnectAccount onClick={_login} />
          ) : (
            <p>{account.getName() || account.getAddress()}</p>
          )}
        </div>
      </header>
      <main>{props?.children}</main>
      {loading && <Loading />}
    </div>
  )
}
