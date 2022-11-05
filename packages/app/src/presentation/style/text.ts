import { gray } from "./palette"

const BASE_SIZE = 1

const text = {
  // sizes
  xxs: BASE_SIZE * 0.625 + "rem", // 10px;
  xs: BASE_SIZE * 0.75 + "rem", // 12px;
  sm: BASE_SIZE * 0.875 + "rem", // 14px;
  smLg: BASE_SIZE * 0.9375 + "rem", // 15px;
  base: BASE_SIZE + "rem", // 16px;
  md: BASE_SIZE * 1.0625 + "rem", // 17px;
  lg: BASE_SIZE * 1.125 + "rem", // 18px;
  xl: BASE_SIZE * 1.25 + "rem",
  xl2: BASE_SIZE * 1.5 + "rem",
  xl3: BASE_SIZE * 1.875 + "rem",
  xl4: BASE_SIZE * 2.25 + "rem",
  xl5: BASE_SIZE * 2.75 + "rem",
  // colors
  dark: gray._900,
  main: gray._700,
  light: gray._500,
}

export default text
