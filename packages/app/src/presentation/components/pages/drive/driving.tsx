/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react"
import { css } from "@emotion/react"
import { StopDriving } from "presentation/components/parts/button/stopDriving"
import { TimeContainer } from "presentation/components/parts/container/time"
import { flex_center, px, primary } from "presentation/style"

export const Driving = (props: { stop: () => void; startDate: Date }) => {
  const [time, setTime] = useState<number>(0)
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null)
  useEffect(() => {
    setTimer(
      setInterval(() => {
        setTime(Date.now() - Date.parse(props.startDate.toISOString()))
      }, 1000)
    )
    return () => {
      timer && clearInterval(timer)
    }
  }, [props.startDate])
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        flex-direction: column;
        ${flex_center}
      `}
    >
      <StopDriving onClick={props?.stop} />
      <div
        css={css`
          width: 200px;
          color: ${primary};
          margin-top: ${px._36};
        `}
      >
        <TimeContainer ms={time} />
      </div>
    </div>
  )
}
