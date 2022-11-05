/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button, Props } from "."
import { flex_center, gray, white } from "presentation/style"

export const Cancel = (props: Props) => {
  const { style = null, ...other } = props
  return (
    <Button
      style={css`
        ${flex_center}
        flex-direction: column;
        width: 200px;
        background-color: ${gray};
        ${style}
      `}
      {...other}
    >
      <p
        css={css`
          color: ${white};
        `}
      >
        Cancel
      </p>
    </Button>
  )
}
