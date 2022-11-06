/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button, Props } from "."
import { flex_center, gray, px } from "presentation/style"
import Connected from "presentation/assets/connected.svg"

export const ConnectAccount = (props: Props) => {
  const { style = null, ...other } = props

  return (
    <Button
      style={css`
        ${flex_center}
        flex-direction: column;
        width: 80px;
        padding: ${px._10};
        ${style}
      `}
      {...other}
    >
      <p>Connect</p>
      <p>Wallet</p>
    </Button>
  )
}

export const ConnectdAccount = (props: Props) => {
  const { style = null, ...other } = props
  return (
    <Button
      style={css`
        ${flex_center}
        flex-direction: column;
        width: 80px;
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
