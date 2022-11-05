import React from "react"

/*

ホーム

*/
const TopComponent = React.lazy(() =>
  import("presentation/components/pages/top").then(({ Top }) => ({
    default: Top,
  }))
)

export const PATHS = {
  top: "/top",
}

export const Top = [
  {
    path: PATHS.top,
    element: <TopComponent />,
  },
]

export const ROUTES = [...Top]
