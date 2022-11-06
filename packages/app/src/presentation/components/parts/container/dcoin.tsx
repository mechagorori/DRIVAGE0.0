/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react"
import DcoinUnit from "presentation/assets/dcoin-unit.svg"
import { primary, justify_content_between } from "presentation/style"

export const DcoinContainer = (props: {
  amount: number
  style?: SerializedStyles
}) => (
  <div
    css={css`
      color: ${primary};
      ${justify_content_between}
      width: 100%;
      font-family: ニコモジ＋;
    `}
  >
    <label>{props?.amount}</label>
    <img
      src={DcoinUnit}
      alt="lank-icon"
      css={css`
        width: 36px;
        height: 36px;
      `}
    />
  </div>
)
