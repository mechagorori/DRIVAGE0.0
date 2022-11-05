/** @jsxImportSource @emotion/react */
import { ReactNode } from "react"
import { css } from "@emotion/react"
import { useLoginUseCase } from "application/usecase/login"
import { ConnectAccount } from "presentation/components/parts/button/connectAccount"
import { black, justify_content_between, px } from "presentation/style"

export const MainLayout = (props: { children?: ReactNode }) => {
  const { account, login } = useLoginUseCase()
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
            <ConnectAccount onClick={login} />
          ) : (
            <p>{account.getName() || account.getAddress()}</p>
          )}
        </div>
      </header>
      <main>{props?.children}</main>
    </div>
  )
}
