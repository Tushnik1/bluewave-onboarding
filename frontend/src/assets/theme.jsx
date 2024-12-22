import { createTheme } from "@mui/material/styles";

// Light theme definition
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7f56d9",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "#344054",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "13px",
          padding: "3px 9px",
          fontStyle: "normal",
          fontFamily: "'Inter','sans-serif'",
          fontWeight: 400,
          lineHeight: "20px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "250px",
          flexShrink: 0,
          zIndex: 1200,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

// Dark theme definition
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7f56d9",
    },
    background: {
      default: "#121212",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#333",
          color: "#FFFFFF",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "250px",
          flexShrink: 0,
          zIndex: 1200,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "13px",
          padding: "3px 9px",
          fontStyle: "normal",
          fontFamily: "'Inter','sans-serif'",
          fontWeight: 400,
          lineHeight: "20px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});
