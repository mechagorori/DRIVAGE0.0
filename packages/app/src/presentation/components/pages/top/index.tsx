/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useMemo, useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useLoginUseCase } from "application/usecase/login"
import { MainLayout } from "presentation/components/layouts"
import { BuyCar } from "presentation/components/parts/button/buyCar"
import { SelectCar } from "presentation/components/parts/button/selectCar"
import { CarImage } from "presentation/components/parts/image/car"
import { AnznContainer } from "presentation/components/parts/container/anzn"
import { SeasonContainer } from "presentation/components/parts/container/season"
import { LankContainer } from "presentation/components/parts/container/lank"
import { DcoinContainer } from "presentation/components/parts/container/dcoin"
import {
  flex_center,
  white,
  px,
  flex,
  align_items_center,
} from "presentation/style"
import Background from "presentation/assets/background.svg"
import { PATHS } from "presentation/routes"

export const Top = () => {
  const [image, setImage] = useState<string | undefined>(undefined)
  const navigate = useNavigate()
  const { account } = useLoginUseCase()
  const cars = useMemo(() => account?.getCars() ?? [], [account])
  const _setImage = useCallback(async () => {
    const meta = await cars?.find((i) => !!i.getIsSelected())?.getJson()
    setImage((meta?.image as string) ?? undefined)
  }, [cars])
  const anzn = useMemo(() => account?.getTotalAnznPoint() ?? 0, [account])

  useEffect(() => {
    _setImage()
  }, [cars])

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
          `}
        >
          <div
            css={css`
              height: 100px;
              ${align_items_center}
            `}
          >
            <div
              css={css`
                ${flex}
                flex-basis: 50%;
              `}
            >
              <AnznContainer point={anzn} />
              <SeasonContainer
                season={"1"}
                style={css`
                  margin-left: ${px._10};
                `}
              />
            </div>
            <div
              css={css`
                flex-basis: 50%;
                flex-direction: column;
                ${flex_center}
              `}
            >
              <div
                css={css`
                  width: 150px;
                `}
              >
                <LankContainer />
                <DcoinContainer
                  amount={10000}
                  style={css`
                    margin-top: ${px._10};
                  `}
                />
              </div>
            </div>
          </div>
          <CarImage src={image} alt="car" />
          <div
            css={css`
              margin-top: ${px._36};
              ${flex_center}
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
