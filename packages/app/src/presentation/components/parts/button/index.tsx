/** @jsxImportSource @emotion/react */
import { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/react"
import { px, primary } from "presentation/style"

export type Props = {
  style?: SerializedStyles
  children?: ReactNode
} & JSX.IntrinsicElements["div"]
export const Button = (props: Props) => {
  const { style = null, ...other } = props
  return (
    <div
      css={css`
        background-color: ${primary};
        padding: ${px._10};
        border-radius: ${px._32};
        padding: ${px._20};
        ${style}
      `}
      {...other}
    >
      {props?.children}
    </div>
  )
}
