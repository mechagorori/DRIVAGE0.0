/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button, Props } from "."
import { flex_center, gray, px } from "presentation/style"
import Connected from "presentation/assets/connected.svg"

export const ConnectWallet = (props: Props) => {
  const { style = null, ...other } = props

  return (
    <Button
      style={css`
        ${flex_center}
        flex-direction: column;
        width: 80px;
        padding: ${px._10};
        position: relative;
        color: #fff;
        box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
          0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
        @keyframes blink {
          40% {
            opacity: 0.85;
          }
          42% {
            opacity: 0.4;
          }
          43% {
            opacity: 0.85;
          }
          45% {
            opacity: 0.4;
          }
          46% {
            opacity: 0.85;
          }
        }
        animation: blink 3s infinite alternate;
        ${style}
      `}
      {...other}
    >
      <p>Connect</p>
      <p>Wallet</p>
    </Button>
  )
}

export const ConnectdWallet = (props: Props) => {
  const { style = null, ...other } = props
  return (
    <Button
      style={css`
        ${flex_center}
        flex-direction: column;
        width: 80px;
        padding: ${px._10};
        background-color: ${gray};
        ${style}
      `}
      {...other}
      onClick={() => {}}
    >
      <img src={Connected} alt="connected-icon" />
    </Button>
  )
}
