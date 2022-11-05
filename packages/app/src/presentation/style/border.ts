import { css } from "@emotion/react"
import { gray } from "./palette"

const border = {
  css: {
    normal: css`
      border: 0.1px solid ${gray._200};
    `,
    top: css`
      border-top: 0.1px solid ${gray._200};
    `,
    bottom: css`
      border-bottom: 0.1px solid ${gray._200};
    `,
    left: css`
      border-left: 0.1px solid ${gray._200};
    `,
    right: css`
      border-right: 0.1px solid ${gray._200};
    `,
  },
}

export default border
