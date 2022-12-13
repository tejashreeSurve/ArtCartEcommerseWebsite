import { createTheme } from "@mui/material";
// @import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Quicksand&display=swap");
// @fontface {
//   font-family: 'Bungee Inline', cursive;
//   src: url('https://fonts.googleapis.com/css?family=Bungee+Inline')
// }
export const palette = {
  primary: {
    main: "#000000",
    light: "#ED6647",
    tint: "#F2937D",
    contrastText: "#ffffff",
    scriptbox: "#faf4f8",
  },
  secondary: {
    main: "#FFFFFF",
    light: "#B79494",
    tint: "#DDD7D7",
    contrastText: "#ffffff",
  },
  neutral: {
    highEm: "#8A2424",
    mediumEm: "#B75656",
    disabled: "#DE9393",
    borders: "#F4D5D5",
    background: "#FFF8F8",
    white: "#FFFFFF",
    black: "#332222",
    link: "#D27575",
    tab: "#FFEBEB",
  },
};

export const theme = createTheme({
  palette,
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 120,
          minHeight: 120,
        },
      },
    },
  },
  typography: {
    fontFamily: ["Ultra", "Stint Ultra Condensed", "Stint Ultra Expanded"].join(
      ","
    ),
    //     fontSize: 24,
    //     breadcrumbs: {
    //       fontSize: "12px",
    //       fontWeight: 400,
    //       textDecoration: "none",
    //       fontFamily: "Open Sans",
    //     },
    // button: {},
    //     h1: {
    //       fontSize: "40px",
    //       fontWeight: 700,
    //     },
    //     h2: {
    //       fontSize: "24px",
    //       fontWeight: 700,
    //       lineHeight: "32px",
    //     },
    //     subheading: {
    //       fontSize: "18px",
    //       fontWeight: 600,
    //     },
    //     body1: {
    //       fontSize: "14px",
    //     },
    body2: {
      fontSize: "20px",
      fontFamily: "Stint Ultra Condensed",
    },
    h3: {
      fontFamily: "Ultra",
      color: "black",
    },
    h4: {
      fontSize: "20px",
      fontFamily: "Stint Ultra Expanded",
      fontWeight: "800",
    },
    h5: {
      fontSize: "24px",
      fontFamily: "Stint Ultra Expanded",
      fontWeight: "700",
    },
  },
});
