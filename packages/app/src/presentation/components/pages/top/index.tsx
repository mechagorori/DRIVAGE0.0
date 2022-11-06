/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useLoginUseCase } from "application/usecase/login"
import { MainLayout } from "presentation/components/layouts"
import { BuyCar } from "presentation/components/parts/button/buyCar"
import { SelectCar } from "presentation/components/parts/button/selectCar"
import { CarImage } from "presentation/components/parts/image/car"
import { flex_center, white, px } from "presentation/style"
import Background from "presentation/assets/background.svg"
import { PATHS } from "presentation/routes"

export const Top = () => {
  const navigate = useNavigate()
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
            background-repeat: no-repeat;
            background-position: center;
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
            `}
          >
            <BuyCar onClick={() => navigate(PATHS.purchase)} />
          </div>
        </div>
      ) : (
        <div
          css={css`
            width: 100%;
            height: 100%;
            flex-direction: column;
            ${flex_center}
          `}
        >
          <CarImage
            src="https://firebasestorage.googleapis.com/v0/b/drivage-ac98e.appspot.com/o/cars%2FRectangle.svg?alt=media&token=c766656c-c916-4c27-bd68-761ce367fd0d"
            alt="car"
          />
          <div
            css={css`
              margin-top: ${px._36};
            `}
          >
            <SelectCar
              onClick={() => {
                console.log("INTO")
                navigate(PATHS.drive)
              }}
            />
          </div>
        </div>
      )}
    </MainLayout>
  )
}
