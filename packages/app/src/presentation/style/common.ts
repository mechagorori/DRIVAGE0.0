import { css } from "@emotion/react"
import px from "./px"
import radius from "./radius"
import space from "./space"
import text from "./text"
import { gray, primary } from "./palette"

export const input_common = css`
  min-height: ${px._32};
  border-radius: ${radius.sm};
  padding: ${space._2} ${space._3};
  font-size: ${text.base};
  border-color: ${gray._250};
  &::placeholder {
    color: ${gray._200};
  }
`

export const form_column2 = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > * {
    width: calc(50% - ${space._4});
  }
`
export const modal_top_card = css`
  margin-top: ${space._4};
`
export const modal_actions = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${space._8};
  > button {
    margin-left: ${space._4};
    min-width: ${px._96};
  }
`
export const checkbox_common = css`
  > *:nth-child(1) {
    cursor: pointer;
    border-radius: ${radius.checkbox};
    &:after {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      height: 17px;
      width: 9px;
      margin-top: -2px;
      border-radius: 1px;
    }
  }
`

export const table_th_right = css`
  text-align: right;
  padding-right: ${space._2};
`
// ↓ 場合によっては、padding-right が入ってくる場合があるため、あえて変数化しました
export const table_td_right = css`
  text-align: right;
`
