/** @jsxImportSource @emotion/react */
import { useMemo } from "react"
import { css, SerializedStyles } from "@emotion/react"
import { primary } from "presentation/style"

export const TimeContainer = (props: {
  ms: number
  style?: SerializedStyles
}) => {
  const { ms, style } = props
  const { hours, min, sec } = useMemo(() => {
    const hours = Math.floor(ms / 1000 / 60 / 60) % 24
    const min = Math.floor(ms / 1000 / 60) % 60
    const sec = Math.floor(ms / 1000) % 60
    return {
      hours: hours < 10 ? `0${hours}` : `${hours}`,
      min: min < 10 ? `0${min}` : `${min}`,
      sec: sec < 10 ? `0${sec}` : `${sec}`,
    }
  }, [ms])
  return (
    <p
      css={css`
        color: ${primary};
        font-family: ニコモジ＋;
        ${style}
      `}
    >
      Time: {hours}:{min}:{sec}
    </p>
  )
}
