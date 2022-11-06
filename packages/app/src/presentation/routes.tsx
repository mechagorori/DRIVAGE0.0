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

/*

購入

*/
const PurchaseComponent = React.lazy(() =>
  import("presentation/components/pages/purchase").then(({ Purchase }) => ({
    default: Purchase,
  }))
)

export const PATHS = {
  top: "/top",
  drive: "/drive",
  purchase: "/purchase",
}

export const Component = [
  {
    path: PATHS.top,
    element: <TopComponent />,
  },
  {
    path: PATHS.drive,
    element: <DriveComponent />,
  },
  {
    path: PATHS.purchase,
    element: <PurchaseComponent />,
  },
]

export const ROUTES = Component
