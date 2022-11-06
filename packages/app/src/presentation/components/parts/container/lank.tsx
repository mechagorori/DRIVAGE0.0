/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react"
import BlueIcon from "presentation/assets/blue-icon.svg"
import { primary, justify_content_between } from "presentation/style"

export const LankContainer = (props: { style?: SerializedStyles }) => (
  <div
    css={css`
      color: ${primary};
      ${justify_content_between}
      width: 100%;
    `}
  >
    <label>Lank</label>
    <img
      src={BlueIcon}
      alt="lank-icon"
      css={css`
        width: 36px;
        height: 36px;
      `}
    />
  </div>
)
