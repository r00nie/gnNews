import { createTheme } from "@material-ui/core/styles";

const globalTheme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#3d5afe",
    },
    secondary: {
      main: "#0a2ffe",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: (factor) => `${factor * 8}px`,
});

export default globalTheme;
