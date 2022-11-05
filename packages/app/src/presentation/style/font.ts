import { css } from "@emotion/react"
import text from "./text"
import ui from "./ui"

export const fonts = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap");

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("/webfonts/Roboto-Regular.ttf");
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 100;
    src: url("/webfonts/Roboto-Thin.ttf");
    font-display: swap;
  }
  //
  //@font-face {
  //  font-family: "Noto Sans JP";
  //  font-style: normal;
  //  font-weight: 300;
  //  src: url("/webfonts/NotoSansJP-Light.otf");
  //  font-display: swap;
  //}

  body {
    font-family: ${ui.defaultFontFamily};
    font-size: ${text.base};
    font-weight: 400;
  }
`
