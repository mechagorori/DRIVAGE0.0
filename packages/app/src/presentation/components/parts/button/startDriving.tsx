/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button, Props } from "."
import { flex_center } from "presentation/style"

export const StartDriving = (props: Props) => {
  const { style = null, ...other } = props
  return (
    <Button
      style={css`
        ${flex_center}
        flex-direction: column;
        width: 200px;
        ${style}
      `}
      {...other}
    >
      <p>Start Driving</p>
    </Button>
  )
}
