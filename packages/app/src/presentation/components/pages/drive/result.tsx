/** @jsxImportSource @emotion/react */
import { useMemo } from "react"
import { css } from "@emotion/react"
import { BackToHomePrimary } from "presentation/components/parts/button/backToHome"
import {
  flex_center,
  px,
  justify_content_between,
  primary,
} from "presentation/style"
import { TimeContainer } from "presentation/components/parts/container/time"
import AnznIcon from "presentation/assets/anzn-icon.svg"
import DcoinIcon from "presentation/assets/dcoin-icon.svg"

const COMMENTS = [
  { title: "Superb!!", point: 5 },
  { title: "Well Done!", point: 4 },
  { title: "Watch out", point: 3 },
  { title: "You need to get skill", point: 2 },
  { title: "Go back to Driving school", point: 1 },
  { title: "Go back to Driving school", point: 0 },
]
export const Result = (props: {
  point: number
  mint: () => Promise<void>
  startDate: Date
  endDate: Date
}) => {
  const ms = useMemo(
    () =>
      Date.parse(props?.endDate.toISOString()) -
      Date.parse(props?.startDate.toISOString()),
    [props?.startDate, props?.endDate]
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
          color: ${primary};
          width: 50%;
        `}
      >
        <div
          css={css`
            font-family: ニコモジ＋;
          `}
        >
          <div
            css={css`
              ${justify_content_between}
            `}
          >
            <img src={AnznIcon} alt="anzn-icon" />
            <p>{`000${props?.point}`}</p>
          </div>
          <div
            css={css`
              ${justify_content_between}
              margin-top: ${px._10};
            `}
          >
            <img src={DcoinIcon} alt="dcoin-icon" />
            <p>{`000${props?.point}`}</p>
          </div>
        </div>
        <div
          css={css`
            margin-top: ${px._36};
          `}
        >
          <TimeContainer ms={ms} />
        </div>
        <div
          css={css`
            margin-top: ${px._48};
            font-family: ニコモジ＋;
            ${flex_center}
          `}
        >
          <p>{COMMENTS.find((i) => i.point === props.point)?.title ?? null}</p>
        </div>
      </div>
      <div
        css={css`
          margin-top: ${px._36};
        `}
      >
        <BackToHomePrimary onClick={props?.mint} />
      </div>
    </div>
  )
}
