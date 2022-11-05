/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useLoginUseCase } from "application/usecase/login"
import { StartDriving } from "presentation/components/parts/button/startDriving"
import { Cancel } from "presentation/components/parts/button/cancel"
import { CarImage } from "presentation/components/parts/image/car"
import { flex_center, white, px, primary } from "presentation/style"
import { PATHS } from "presentation/routes"

export const DriveStart = () => {
  const navigate = useNavigate()
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
          width: 100%;
        `}
      >
        <p
          css={css`
            color: ${primary};
          `}
        >
          ドライブの前に
        </p>
        <ol
          css={css`
            margin-top: ${px._36};
            color: ${white};
          `}
        >
          <li>周囲の安全を確保しましょう</li>
          <li
            css={css`
              margin-top: ${px._10};
            `}
          >
            すべての乗員のシートベルトを締めましょう
          </li>
          <li
            css={css`
              margin-top: ${px._10};
            `}
          >
            積荷が崩れないか確認しましょう
          </li>
          <li
            css={css`
              margin-top: ${px._10};
            `}
          >
            シート位置・ハンドル位置を調整しましょう
          </li>
        </ol>
      </div>
      <CarImage
        src="https://firebasestorage.googleapis.com/v0/b/drivage-ac98e.appspot.com/o/cars%2FRectangle.svg?alt=media&token=c766656c-c916-4c27-bd68-761ce367fd0d"
        alt="car"
      />
      <div
        css={css`
          margin-top: ${px._36};
        `}
      >
        <StartDriving />
        <Cancel
          style={css`
            margin-top: ${px._10};
          `}
          onClick={() => navigate(PATHS.top)}
        />
      </div>
    </div>
  )
}
