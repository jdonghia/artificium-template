import { DefaultTheme } from "styled-components";

type Theme = DefaultTheme;

type ColorKey = keyof Theme["colors"];

type Helper = {
  getColor: (colorKey: ColorKey) => (props: { theme: Theme }) => string;
};

const helper: Helper = {
  getColor:
    (colorKey) =>
    ({ theme }) =>
      theme.colors[colorKey],
};

export default helper;
