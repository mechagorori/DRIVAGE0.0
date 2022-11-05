/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ProgressBar } from "react-loader-spinner"
import { black, flex_center, px, primary } from "presentation/style"
import Logo from "presentation/assets/logo.svg"
import Icon from "presentation/assets/icon.svg"

export const Loading = () => {
  return (
    <div
      css={css`
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        background-color: ${black};
        top: 0;
        flex-direction: column;
        ${flex_center}
        justify-content: flex-end;
      `}
    >
      <div>
        <img src={Icon} alt="icon" />
      </div>
      <div
        css={css`
          margin-top: ${px._112};
        `}
      >
        <img src={Logo} alt="logo" />
      </div>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{ marginTop: px._272 }}
        wrapperClass="progress-bar-wrapper"
        borderColor={black}
        barColor={primary}
      />
    </div>
  )
}
