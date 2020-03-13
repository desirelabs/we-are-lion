import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  atoms: {
    layout: {
      desktop: {
        margin: "15px",
        containerWidth: "1170px"
      },
      tablet: {
        margin: "10px",
        containerWidth: "768px"
      },
      mobile: {
        margin: "8px",
        containerWidth: "375px"
      }
    },
    colors: {
      white: "#fff",
      grey: "#484848",
      dark: "#131313",
      black: "#000000",
      primary: "#ff2e64",
      secondary: "#ea6060",
      primaryDark: "#c32955",
      secondaryDark: "#cd4848",
      lightGrey: "#e6e6e6"
    }
  }
});

export default theme;
