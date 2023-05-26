const COLORS_THEME_PROVIDER = Object.freeze({
  "day-blue-900": "#0C1132",
  "gradient-blue": "linear-gradient(#82DBF7, #B6F09C)",
  "noble-black-200": "#CDCECF",
  "noble-black-300": "#9B9C9E",
  "noble-black-400": "#686B6E",
  "noble-black-500": "#363A3D",
  "noble-black-600": "#1A1D21",
  "noble-black-700": "#131619",
  "stem-green-500": "#B6F09C",
} as const);

const COLORS_GLOBAL_STYLE = Object.freeze({
  "--color-noble-black-700": "#131619",
} as const);

export { COLORS_THEME_PROVIDER, COLORS_GLOBAL_STYLE };
