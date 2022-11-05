/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React, { useMemo } from "react"
import { useLoginUseCase } from "application/usecase/login"
import { MainLayout } from "presentation/components/layouts"
import { BuyCar } from "presentation/components/parts/button/buyCar"
import { flex_center, white, px } from "presentation/style"
import Background from "presentation/assets/background.svg"

export const Top = () => {
  const { account } = useLoginUseCase()
  const cars = useMemo(() => account?.getCars() ?? [], [account])
  return (
    <MainLayout>
      {!cars.length ? (
        <div
          css={css`
            background-image: url(${Background});
            background-color: rgba(0, 0, 0, 0.8);
            background-blend-mode: darken;
            width: 100%;
            height: 100%;
            flex-direction: column;
            ${flex_center}
          `}
        >
          <p
            css={css`
              color: ${white};
            `}
          >
            No car you can drive
          </p>
          <div
            css={css`
              margin-top: ${px._36};
              width: 200px;
            `}
          >
            <BuyCar
              onClick={() => {}}
              css={css`
                width: 100%;
              `}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </MainLayout>
  )
}
