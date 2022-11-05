/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useMemo } from "react"
import { useLoginUseCase } from "application/usecase/login"
import { StopDriving } from "presentation/components/parts/button/stopDriving"
import { flex_center, white, px, primary } from "presentation/style"

export const Driving = (props: { stop: () => void }) => {
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
      <div css={css``}>
        <StopDriving onClick={props?.stop} />
      </div>
      <div
        css={css`
          width: 200px;
          color: ${primary};
          margin-top: ${px._36};
        `}
      >
        <p>Time: </p>
      </div>
    </div>
  )
}
