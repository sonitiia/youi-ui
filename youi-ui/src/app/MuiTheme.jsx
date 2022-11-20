import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import * as React from "react";

export const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#000000',
            light: '#FFFFFF',
            dark: '#000000',
        },
        secondary: {
            main: '#73428a',
            light: '#9f73b9',
            dark: '#4c215a',
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
            primary: 'rgba(255,255,255,0.87)',
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
                    height: "100%",
                    fontFamily: "Nunito Sans",
                },
                body: {
                    height: "100%",
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
