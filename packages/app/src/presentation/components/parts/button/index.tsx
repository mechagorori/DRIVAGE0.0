/** @jsxImportSource @emotion/react */
import { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/react"
import { px, primary } from "presentation/style"

export type Props = {
  style?: SerializedStyles
  children?: ReactNode
} & JSX.IntrinsicElements["div"]
export const Button = (props: Props) => (
  <div
    css={css`
      background-color: ${primary};
      padding: ${px._10};
      border-radius: ${px._20};
      ${props?.style}
    `}
    onClick={(e) => !!props?.onClick && props?.onClick(e)}
  >
    {props?.children}
  </div>
)
