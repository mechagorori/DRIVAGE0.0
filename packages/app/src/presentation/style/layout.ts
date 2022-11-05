import { css, SerializedStyles } from "@emotion/react"

export const flex = css`
  display: flex;
`

export const justify_content_center = css`
  ${flex}
  justify-content: center;
`

export const justify_content_between = css`
  ${flex}
  justify-content: space-between;
  align-items: center;
`

export const justify_content_end = css`
  ${flex}
  justify-content: flex-end;
  align-items: center;
`

export const align_items_center = css`
  ${flex}
  align-items: center;
`

export const flex_center = css`
  ${flex}
  justify-content: center;
  align-items: center;
`

export const next = (style: SerializedStyles) => css`
  :not(:first-of-type) {
    ${style};
  }
`

export const next_margin_top = (val: string | number) => css`
  :not(:first-of-type) {
    margin-top: ${typeof val === "string" ? val : val + "rem"};
  }
`

export const next_margin_left = (val: string | number) => css`
  :not(:first-of-type) {
    margin-left: ${typeof val === "string" ? val : val + "rem"};
  }
`
