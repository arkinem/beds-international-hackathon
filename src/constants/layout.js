import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const deviceSize = {
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
  mobileS: `(min-width: ${deviceSize.mobileS}px)`,
  mobileM: `(min-width: ${deviceSize.mobileM}px)`,
  mobileL: `(min-width: ${deviceSize.mobileL}px)`,
  tablet: `(min-width: ${deviceSize.tablet}px)`,
  laptop: `(min-width: ${deviceSize.laptop}px)`,
  laptopL: `(min-width: ${deviceSize.laptopL}px)`,
  desktop: `(min-width: ${deviceSize.desktop}px)`,
  desktopL: `(min-width: ${deviceSize.desktop}px)`,
};

const basicPalette = {
  primary: "#F71735",
  secondary: "#F77F00",
  fontDark: "rgb(30,30,30)",
  fontLight: "rgb(245,245,245)",
};

export const colors = {
  ...basicPalette,
  red: "rgb(255,52,84)",
  blueGrey: "rgb(36, 43, 51)",
  background: "#011627",
  mak: {
    surface: "#FFF",
    topBar: "#d8d8d8",
    leftDot: "#ff483f",
    middleDot: "#ecbb38",
    rightDot: "#36d3a8",
  },
  waves: {
    first: basicPalette.primary,
    second: "#f46036",
    third: "#F77F00",
  },
  button: {
    primary: {
      main: "rgb(250,250,250)",
      accent: basicPalette.primary,
      hover: "#fff6f7",
      active: "#feecef",
      border: "#fb8b9a",
    },
    secondary: {
      main: "rgb(250,250,250)",
      accent: basicPalette.secondary,
      hover: "#fff6f7",
      active: "#feecef",
      border: "#fb8b9a",
    },
  },
  scenariosCircle: "#F77F00",
};

export const shadow = {
  strong: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);",
};

export const font = {
  main: "Ubuntu",
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: white !important;
    font-family: ${font.main} !important;
  }

  html,
  body,
  #root {
		width: 100%;
		height: 100%;
		margin: 0;
    padding: 0;
    min-width: 380px !important;
    background-color: ${colors.background};
	}
`;
