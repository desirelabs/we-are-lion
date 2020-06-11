import { createMuiTheme } from "@material-ui/core/styles";

const bareTheme = {
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
      grey300: "#acacac",
      dark: "#131313",
      black: "#000000",
      primary: "#ff2e64",
      secondary: "#ff7e07",
      primaryLight: "#ff79a1",
      secondaryLight: "#ffb571",
      primaryDark: "#c32955",
      secondaryDark: "#cd4848",
      lightGrey: "#e6e6e6"
    }
  }
};

const theme = createMuiTheme(bareTheme);

export default theme;
