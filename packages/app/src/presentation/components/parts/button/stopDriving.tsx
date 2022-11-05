/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button, Props } from "."
import { flex_center, red, white } from "presentation/style"

export const StopDriving = (props: Props) => {
  const { style = null, ...other } = props
  return (
    <Button
      style={css`
        ${flex_center}
        flex-direction: column;
        width: 200px;
        background-color: ${red};
        ${style}
      `}
      {...other}
    >
      <p
        css={css`
          color: ${white};
        `}
      >
        Stop Driving
      </p>
    </Button>
  )
}
