/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button, Props } from "."
import { flex_center, gray } from "presentation/style"
import Connected from "presentation/assets/connected.svg"

export const ConnectAccount = (props: Props) => (
  <Button
    style={css`
      ${flex_center}
      flex-direction: column;
      width: 80px;
    `}
    {...props}
  >
    <p>Connect</p>
    <p>Account</p>
  </Button>
)

export const ConnectdAccount = (props: Props) => (
  <Button
    style={css`
      ${flex_center}
      flex-direction: column;
      width: 80px;
      background-color: ${gray};
    `}
    {...props}
    onClick={() => {}}
  >
    <img src={Connected} alt="connected-icon" />
  </Button>
)
