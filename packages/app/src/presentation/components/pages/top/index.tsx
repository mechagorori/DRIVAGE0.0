/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useMemo, useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useLoginUseCase } from "application/usecase/login"
import { useDcoinUseCase } from "application/usecase/dcoin"
import { useAnznUseCase } from "application/usecase/anzn"
import { MainLayout } from "presentation/components/layouts"
import { BuyCar } from "presentation/components/parts/button/buyCar"
import { SelectCar } from "presentation/components/parts/button/selectCar"
import { CarImage } from "presentation/components/parts/image/car"
import { AnznContainer } from "presentation/components/parts/container/anzn"
import { SeasonContainer } from "presentation/components/parts/container/season"
import { RankContainer } from "presentation/components/parts/container/rank"
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
  const { anzn } = useAnznUseCase()
  const { dcoin } = useDcoinUseCase()

  useEffect(() => {
    _setImage()
  }, [_setImage])

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
            <BuyCar
              onClick={() => navigate(PATHS.purchase)}
              disable={!account}
            />
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
                  width: 125px;
                `}
              >
                <RankContainer />
                <DcoinContainer
                  amount={dcoin}
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
            <SelectCar onClick={() => navigate(PATHS.drive)} />
          </div>
        </div>
      )}
    </MainLayout>
  )
}
