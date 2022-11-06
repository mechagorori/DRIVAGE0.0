/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Props, Button } from "."
import { flex_center, white, px } from "presentation/style"

export const BackToHome = (props: Props) => {
  return (
    <div
      css={css`
        ${flex_center}
        width: 200px;
        ${props?.style}
        color: ${white};
        border-bottom: 1px solid ${white};
        padding: ${px._10};
      `}
      {...props}
    >
      <p>Back to home</p>
    </div>
  )
}

export const BackToHomePrimary = (props: Props) => {
  return (
    <Button
      style={css`
        ${flex_center}
        width: 200px;
        ${props?.style}
      `}
      {...props}
    >
      <p>Back to home</p>
    </Button>
  )
}
