/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button, Props } from "."
import { flex_center } from "presentation/style"

export const SelectCar = (props: Props) => (
  <Button
    style={css`
      ${flex_center}
      flex-direction: column;
      width: 200px;
    `}
    {...props}
  >
    <p>Drive this CarNFT</p>
  </Button>
)
