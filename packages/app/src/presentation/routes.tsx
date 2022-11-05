import React from "react"

/*

ホーム

*/
const TopComponent = React.lazy(() =>
  import("presentation/components/pages/top").then(({ Top }) => ({
    default: Top,
  }))
)

/*

ドライブ

*/
const DriveComponent = React.lazy(() =>
  import("presentation/components/pages/drive").then(({ Drive }) => ({
    default: Drive,
  }))
)

export const PATHS = {
  top: "/top",
  drive: "/drive",
}

export const Top = [
  {
    path: PATHS.top,
    element: <TopComponent />,
  },
]

export const Drive = [
  {
    path: PATHS.drive,
    element: <DriveComponent />,
  },
]

export const ROUTES = [...Top, ...Drive]
