/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useMemo, Fragment } from "react"
import { AnznDetails } from "const/anzn"
import { useLoginUseCase } from "application/usecase/login"
import { CheckResult } from "presentation/components/parts/button/checkResult"
import { Checkbox } from "presentation/components/parts/input/checkbox"
import {
  flex_center,
  white,
  px,
  align_items_center,
  next_margin_top,
} from "presentation/style"

const row = next_margin_top(px._20)
export const Rate = (props: {
  details: { id: string; title: string; isSuccess: boolean }[]
  onClick: (id: string) => void
  result: () => void
}) => {
  const { account } = useLoginUseCase()
  const car = useMemo(
    () => account?.getCars()?.find((i) => !i.getIsSelected()) ?? {},
    [account]
  )
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        flex-direction: column;
        ${flex_center}
      `}
    >
      <div
        css={css`
          color: ${white};
        `}
      >
        {props?.details.map((d, index) => (
          <div
            key={index}
            css={css`
              ${row}
              ${align_items_center}
            `}
          >
            <Checkbox
              checked={d.isSuccess}
              onClick={() => props.onClick(d.id)}
            />
            <p
              css={css`
                margin-left: ${px._10};
              `}
            >
              {d.title}
            </p>
          </div>
        ))}
      </div>
      <div
        css={css`
          margin-top: ${px._36};
        `}
      >
        <CheckResult onClick={props.result} />
      </div>
    </div>
  )
}
