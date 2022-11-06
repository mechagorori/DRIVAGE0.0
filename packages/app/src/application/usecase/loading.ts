import { useCallback } from "react"
import { atom, selector, useSetRecoilState, useRecoilValue } from "recoil"

const initialValue: { loading: boolean } = { loading: false }

const loadingState = atom({
  key: "loading",
  default: initialValue,
})

export const loadingSelecter = selector({
  key: "loading_handler",
  get: ({ get }) => get(loadingState),
})

export const useLoadingUseCase = () => {
  const value = useRecoilValue(loadingSelecter)
  const handler = useSetRecoilState(loadingState)
  const onChange = useCallback(
    (data?: boolean) => {
      handler({ ...value, ...{ loading: !!data } })
    },
    [handler, value]
  )

  return {
    loading: value.loading,
    onChange,
  }
}
