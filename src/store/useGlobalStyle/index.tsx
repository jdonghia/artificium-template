import { ThemeProvider, createGlobalStyle } from "styled-components";

import { COLORS_THEME_PROVIDER, COLORS_GLOBAL_STYLE } from "src/styles/colors";

import { ThemeProps } from "./types";

const GlobalStyles = createGlobalStyle`
  html {
    ${COLORS_GLOBAL_STYLE}
  }
`;

export default function GlobalStyleProvider({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={{ colors: COLORS_THEME_PROVIDER }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
