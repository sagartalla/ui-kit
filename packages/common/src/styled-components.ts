import * as styledComponents from 'styled-components';

// theme.ts
// your theme variables
export interface ThemeInterface {
  primaryColor: DataProps;
  lightWeight: number;
  normalWeight: number;
  boldWeight: number;
  bolderWeight: number;
  breakpoints?: object;
  gutter?: string;
}

interface DataProps {
  dark: string;
  light: string;
  lightest: string;
  normal: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
