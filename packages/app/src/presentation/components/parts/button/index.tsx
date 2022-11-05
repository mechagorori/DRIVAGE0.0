/** @jsxImportSource @emotion/react */
import { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/react"
import { px, space, flex_center, primary, white } from "presentation/style"

export const Button = (
  props: {
    style?: SerializedStyles
    children?: ReactNode
  } & JSX.IntrinsicElements["div"]
) => (
  <div
    css={css`
      background-color: ${primary};
      padding: ${px._10};
      border-radius: ${px._20};
      ${props?.style}
    `}
    onClick={(e) => props?.onClick && props?.onClick(e)}
  >
    {props?.children}
  </div>
)
