/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react"

export type Props = {
  style?: SerializedStyles
} & JSX.IntrinsicElements["img"]

export const CarImage = (props: Props) => (
  <img
    css={css`
      width: 100%;
      height: 50%;
      ${props?.style}
    `}
    {...props}
  />
)
