/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button, Props } from "."
import { flex_center, px } from "presentation/style"

export const BuyCar = (props: Props) => {
  const { style = null, ...other } = props
  return (
    <Button
      style={css`
        ${flex_center}
        width: 200px;
        ${style}
      `}
      {...other}
    >
      <p>Buy your car</p>
    </Button>
  )
}
