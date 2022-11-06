/** @jsxImportSource @emotion/react */
import { useCallback } from "react"
import { css } from "@emotion/react"
import { useNavigate } from "react-router-dom"
import { usePurchaseUseCase } from "application/usecase/purchase"
import { MainLayout } from "presentation/components/layouts"
import { Purchase as PurchaseBtn } from "presentation/components/parts/button/purchase"
import { BackToHome } from "presentation/components/parts/button/backToHome"
import { CarImage } from "presentation/components/parts/image/car"
import { StandardCar } from "const/car"
import {
  primary,
  white,
  text,
  px,
  flex_center,
  justify_content_end,
} from "presentation/style"
import { PATHS } from "presentation/routes"

export const Purchase = () => {
  const navigate = useNavigate()
  const { execute } = usePurchaseUseCase()
  const purchase = useCallback(async () => {
    await execute()
    navigate(PATHS.top)
  }, [])

  return (
    <MainLayout>
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
              font-size: ${text.xl};
              font-family: ニコモジ＋;
            `}
          >
            {StandardCar.meta.name}
          </p>
          <p
            css={css`
              color: ${white};
              white-space: pre-wrap;
              word-wrap: break-word;
              margin-top: ${px._10};
            `}
          >
            {StandardCar.meta.description}
          </p>
          <div css={justify_content_end}>
            <p
              css={css`
                color: ${primary};
                font-size: ${text.xl2};
                margin-top: ${px._20};
                font-family: ニコモジ＋;
              `}
            >
              {StandardCar.meta.attributes.find((i) => i.trait_type === "price")
                ?.value ?? "-"}
              MATIC
            </p>
          </div>
        </div>
        <CarImage src={StandardCar.meta.image} />
        <div
          css={css`
            margin-top: ${px._36};
          `}
        >
          <PurchaseBtn onClick={purchase} />
          <BackToHome
            onClick={() => navigate(PATHS.top)}
            style={css`
              margin-top: ${px._20};
            `}
          />
        </div>
      </div>
    </MainLayout>
  )
}
