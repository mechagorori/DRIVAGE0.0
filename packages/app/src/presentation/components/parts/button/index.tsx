/** @jsxImportSource @emotion/react */
import { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/react"
import { px, primary, gray, not_allowed } from "presentation/style"

export type Props = {
  style?: SerializedStyles
  children?: ReactNode
  disable?: boolean
} & JSX.IntrinsicElements["div"]
export const Button = (props: Props) => {
  const { style = null, ...other } = props
  return (
    <div
      css={css`
        background-color: ${!props?.disable ? primary : gray};
        padding: ${px._10};
        border-radius: ${px._32};
        padding: ${px._20};
        ${props?.disable && not_allowed}
        ${style}
      `}
      {...other}
      onClick={!props?.disable ? props?.onClick : () => {}}
    >
      {props?.children}
    </div>
  )
}
