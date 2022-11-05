import { useState, useMemo, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useDrivingResultUseCase } from "application/usecase/drivingResult"
import { MainLayout } from "presentation/components/layouts"
import { AnznDetails } from "const/anzn"
import { DriveStart } from "./start"
import { Driving } from "./driving"
import { Rate } from "./rate"
import { Result } from "./result"
import { PATHS, ROUTES } from "presentation/routes"

enum MODE {
  START = "start",
  DRIVING = "driving",
  RATE = "rate",
  RESULT = "result",
}
export const Drive = () => {
  const navgate = useNavigate()
  const [mode, setMode] = useState<MODE>(MODE.START)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndtDate] = useState<Date>()
  const start = useCallback(() => {
    setStartDate(new Date())
    setMode(MODE.DRIVING)
  }, [setStartDate, setMode])
  const stop = useCallback(() => {
    setEndtDate(new Date())
    setMode(MODE.RATE)
  }, [setEndtDate, setMode])
  const result = useCallback(() => {
    setMode(MODE.RESULT)
  }, [setEndtDate, setMode])
  const [details, setDetails] = useState(
    AnznDetails.map((i) => ({ ...i, isSuccess: false }))
  )
  const onClick = useCallback(
    (id: string) => {
      setDetails((prev) => {
        return [
          ...prev?.map((i) => ({
            ...i,
            isSuccess: i.id === id ? !i.isSuccess : i.isSuccess,
          })),
        ]
      })
    },
    [setDetails]
  )
  const point = useMemo(
    () =>
      details
        ?.map((i) => (i.isSuccess ? 1 : 0) as number)
        .reduce((a, b) => a + b, 0),
    [details]
  )
  const { execute } = useDrivingResultUseCase()
  const mint = useCallback(async () => {
    if (!startDate || !endDate) throw new Error()
    await execute({ startDate, endDate, details })
    navgate(PATHS.top)
  }, [execute, details, startDate, endDate, navgate])

  const component = useMemo(() => {
    if (mode === MODE.START) return <DriveStart start={start} />
    if (mode === MODE.DRIVING) return <Driving stop={stop} />
    if (mode === MODE.RATE)
      return <Rate details={details} onClick={onClick} result={result} />
    if (mode === MODE.RESULT) return <Result point={point} mint={mint} />
    return null
  }, [start, stop, details, onClick, result, point, mode])
  return <MainLayout>{component}</MainLayout>
}
