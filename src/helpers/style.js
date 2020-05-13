import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: white !important;
    font-family: Ubuntu !important;
  }
`;

export const colors = {
  // red: "#d84432",
  red: "rgb(255,52,84)",
  blueGrey: "rgb(36, 43, 51)",
};
