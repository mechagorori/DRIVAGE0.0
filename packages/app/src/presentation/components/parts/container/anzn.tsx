/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react"
import AnznFrame from "presentation/assets/anzn-frame.svg"
import { primary, flex_center } from "presentation/style"

export const AnznContainer = (props: {
  point: number
  style?: SerializedStyles
}) => {
  return (
    <div
      css={css`
        position: relative;
        width: 68px;
        height: 68px;
        font-family: ニコモジ＋;
        ${props?.style};
      `}
    >
      <img src={AnznFrame} alt="anzn-icon" />
      <div
        css={css`
          position: absolute;
          color: ${primary};
          top: 54%;
          left: calc(50% - 34px);
        `}
      >
        <div
          css={css`
            width: 68px;
            ${flex_center}
          `}
        >
          {props?.point}
        </div>
      </div>
    </div>
  )
}
