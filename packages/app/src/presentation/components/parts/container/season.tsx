/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react"
import SeasonFrame from "presentation/assets/season-frame.svg"
import { primary, flex_center } from "presentation/style"

export const SeasonContainer = (props: {
  season: string
  style?: SerializedStyles
}) => {
  return (
    <div
      css={css`
        position: relative;
        width: 68px;
        height: 68px;
        font-family: ニコモジ＋;
        ${props?.style}
      `}
    >
      <img src={SeasonFrame} alt="anzn-icon" />
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
          {props?.season}
        </div>
      </div>
    </div>
  )
}
