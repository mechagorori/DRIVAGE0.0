/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react"
import { primary, white } from "presentation/style"

export type Props = JSX.IntrinsicElements["input"] & {
  style?: SerializedStyles
}

export const Checkbox = (props: Props) => {
  return (
    <div
      css={css`
        border: 1px solid ${primary};
        display: inline-block;
        width: 24px;
        height: 24px;
        position: relative;
         background-color: ${props?.checked ? primary : "transparent"};
        transition: all 0.3s ease-in-out;
        &::after {
          border-right: 4px solid ${white};
          border-bottom: 4px solid ${white};
          content: "";
          display: block;
          height: 18px;
          left: calc(50% - 6px);
          margin-top: -14px;
          opacity: 0;
          position: absolute;
          top: calc(50% + 3px);
          transform: rotate(45deg);
          width: 10px;
          transition: all 0.3s ease-in-out;
          opacity: ${props?.checked ? 1 : 0};
          background-color: ${props?.checked ? primary : "transparent"};
      `}
      {...props}
    >
      <input
        css={css`
          display: none;
        `}
        {...props}
        type="checkbox"
      />
    </div>
  )
}
