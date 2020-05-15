import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptopS: 1024,
  laptop: 1280,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
};

export const colors = {
  // red: "#d84432",
  red: "rgb(255,52,84)",
  blueGrey: "rgb(36, 43, 51)",
  background: "#011627",
  primary: "#F71735",
  fontDark: "rgb(30,30,30)",
  fontLight: "rgb(235,235,235)",
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: white !important;
    font-family: Ubuntu !important;
  }

  html,
  body,
  #root {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
    background-color: ${colors.background};
	}
`;