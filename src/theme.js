import { createMuiTheme } from "@material-ui/core/styles";

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0277BD",
      shaders: {
        50: "#E1F5FE",
        100: "#B3E5FC",
        200: "#81D4FA",
        300: "#4FC3F7",
        400: "#29B6F6",
        500: "#03A9F4",
        600: "#039BE5",
        700: "#0288D1",
        800: "#0277BD",
        900: "#01579B"
      }
    },
    secondary: {
      main: "#DEE1E3",
      shaders: {
        50: "#F8FBFD",
        100: "#F3F6F8",
        200: "#ECEFF1",
        300: "#DEE1E3",
        400: "#BBBEC0",
        500: "#9C9FA1",
        600: "#737678",
        700: "#5F6264",
        800: "#404345",
        900: "#202223"
      }
    },
    text: {
      primary: "#131B1E",
      error: "#C93045"
    },
    labels: {
      available: "#4ECC3B",
      unavailable: "#C93045",
      realtime: "#017A6A",
      notfound: "#E0BE0C"
    },
    others: {
      disableone: "#8E8F90",
      disabletwo: "#DDDEDF",
      body: "#F9F9FA",
      tooltip: "#232F34"
    }
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: "Open Sans",
    fontSize: 14,
    h1: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 600,
      fontSize: "36px",
      letterSpacing: "0.8px"
    },
    h2: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 600,
      fontSize: "32px",
      letterSpacing: "0.4px"
    },
    h3: {
      fontFamily: '"Open-Sans", sans-serif',
      fontWeight: 600,
      fontSize: "28px",
      letterSpacing: "0.2px"
    },
    h4: {
      fontFamily: '"Open-Sans", sans-serif',
      fontWeight: 600,
      fontSize: "24px",
      letterSpacing: "0.1px"
    },
    h5: {
      fontFamily: '"Open-Sans", sans-serif',
      fontWeight: 600,
      fontSize: "20px",
      letterSpacing: "0.1px"
    },
    h6: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 600,
      fontSize: "16px",
      letterSpacing: "0.1px"
    },
    blanktitle: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: "24px",
      letterSpacing: "0.17px",
      color: "#737678"
    },
    blankbody: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: "21px",
      letterSpacing: "0.15px",
      color: "#737678"
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: "14px",
      letterSpacing: "0.1px",
      color: "#131b1e",
      lineHeight: "22px"
    }
  }
});

export const linkTheme = theme => ({
  bodylink: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 700,
    fontSize: "14px",
    letterSpacing: "0.1px",
    color: "#0277bd",
    lineHeight: "22px",
    cursor: "pointer",
    "&:active": {
      color: "#0288d1"
    },
    "&:hover": {
      color: "#01579b"
    }
  },
  bodylinkdisabled: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 700,
    fontSize: "14px",
    letterSpacing: "0.1px",
    cursor: "default",
    color: "#8e8f90",
    lineHeight: "22px"
  }
});

export const textTheme = {
  snackbarSl: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    fontSize: "14px",
    letterSpacing: "0.25px",
    color: "#ffffff",
    lineHeight: "20px"
  },
  tablePagination: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    fontSize: "12px",
    letterSpacing: "0.09px",
    color: "#5f6264"
  },
  fieldAssistiveActive: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    cursor: "default",
    fontSize: "12px",
    letterSpacing: "0.4px",
    color: "#0277bd",
    lineHeight: "12px"
  },
  fieldAssistiveEnabled: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    cursor: "default",
    fontSize: "12px",
    letterSpacing: "0.4px",
    color: "#404345",
    lineHeight: "12px"
  },
  darkLabel: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 700,
    fontSize: "11px",
    letterSpacing: "0.92px",
    color: "#131b1e",
    lineHeight: "20px"
  },
  lightLabel: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 700,
    fontSize: "11px",
    letterSpacing: "0.92px",
    color: "#ffffff",
    lineHeight: "20px"
  }
};
