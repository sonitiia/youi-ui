import * as React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1972,
            xxxl: 2508,
            exl: 3208,
            eexl: 4008,
            eeexl: 5000,
            eeexxl: 6100,
            eeexxxl: 7300,
            eeexxxxl: 8500,
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#000000',
            light: 'rgba(265,265,265,0.2)',
            dark: '#000000',
        },
        secondary: {
            main: 'rgba(255,255,255,0.95)',
            light: '#ffffff',
            dark: 'rgba(255,245,235,0.87)',
        },
        error: {
            main: '#e23526',
        },
        info: {
            main: '#7396ad',
        },
        success: {
            main: '#66bb6a',
        },
        background: {
            default: '#ffffff',
            paper: 'rgba(255,243,224,0.73)',
        },
        text: {
            primary: 'rgba(255,255,255,0.9)',
            secondary: '#fffded',
            disabled: 'rgba(218,218,218,0.29)',
            hint: '#ffcdd2',
            contrastText: '#000000'
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
