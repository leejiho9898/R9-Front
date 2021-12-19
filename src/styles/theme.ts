import { createTheme } from "@mui/material";
import { koKR } from "@mui/material/locale";
import { grey, blue, indigo, lightBlue } from "@mui/material/colors";

export const theme = createTheme(
  {
    // breakpoints: {
    //   values: { xs: 0, sm: 420, md: 765, lg: 1200, xl: 1536 },
    // },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Roboto",
        "'Helvetica Neue'",
        "Arial",
        "sans-serif",
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
      ].join(", "),
      h6: {
        fontWeight: "bold",
      },
      h5: {
        fontWeight: "bold",
      },
      h4: {
        fontWeight: "bold",
      },
      subtitle1: {
        fontWeight: "bold",
      },
      subtitle2: {
        fontWeight: "bold",
      },
    },
    palette: {
      primary: {
        // 메인컬러 test중
        main: "#0988E3",
        dark: lightBlue[600],
        contrastText: grey[100],
        // main: lightGreen[400],
        // dark: green[400],
        // contrastText: grey[100],
      },
      secondary: {
        main: blue[600],
        dark: lightBlue[600],
        contrastText: grey[100],
      },
    },
  },
  koKR
);
