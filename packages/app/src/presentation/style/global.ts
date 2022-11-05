import { css } from "@emotion/react"
import text from "./text"
import ui from "./ui"
import breakpoints from "./breakpoints"
import { gray } from "./palette"
import space from "./space"
import shadow from "./shadow"
import radius from "./radius"

export const ress = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    font-family: a-otf-ud-reimin-pr6n, ronde-b, vdl-admin, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`
export const base = css`
  body {
    height: 100%;
    padding: 0;
  }

  html {
    font-size: 15px;
    @media (max-width: ${breakpoints.xl2}) {
      font-size: 13px;
    }

    color: ${text.main};
  }

  body {
    font-family: ${ui.defaultFontFamily};
    font-size: ${text.base};
    color: ${text.main};
    font-weight: 400;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  input[type="radio"] {
    display: none;
  }

  [disabled] {
    cursor: default;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* インプット系 */
  select {
    background-color: ${gray._10};
    border-radius: ${radius.md};
    padding: ${space._1_5} ${space._5} ${space._1_5} ${space._3};
    box-shadow: ${shadow.select};
    border-color: ${gray._250};
    cursor: pointer;
  }
`
