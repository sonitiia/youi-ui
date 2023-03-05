import * as React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "@fontsource/nunito-sans";

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#000000',
            light: '#838383',
            dark: '#353535',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#fff8e1',
            light: '#FFF9E7',
            dark: '#B2AD9D',
            contrastText: '#ffffff',
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    minHeight: "100%",
                    fontFamily: "Nunito Sans",
                    background: "#ffffff",
                },
                body: {
                    height: "100%",
                    backgroundColor: "transparent"

                },
                "#root, main": {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                },
            },
        },
    },
    spacing: 5,
    shape: {
        borderRadius: 15,
        containerBorderRadius: 24,
    },
    typography: {
        fontFamily: "Nunito Sans",
    },
});

const MuiTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MuiTheme;
