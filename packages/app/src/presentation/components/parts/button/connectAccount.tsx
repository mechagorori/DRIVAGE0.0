/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button } from "."
import { px, space, flex_center, primary, white } from "presentation/style"

export const ConnectAccount = (props: { onClick: Function }) => (
  <Button
    style={css`
      ${flex_center}
      flex-direction: column;
      width: 80px;
    `}
    onClick={() => props?.onClick && props?.onClick()}
  >
    <p>Connect</p>
    <p>Account</p>
  </Button>
)
