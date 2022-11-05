/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button, Props } from "."
import { flex_center } from "presentation/style"

export const BuyCar = (props: Props) => (
  <Button
    style={css`
      ${flex_center}
      flex-direction: column;
    `}
    {...props}
  >
    <p>Buy your car</p>
  </Button>
)
