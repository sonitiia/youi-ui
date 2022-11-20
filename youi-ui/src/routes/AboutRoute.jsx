import React from "react";
import { AppBar, Button, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ABOUT_ROUTE } from "../app/Routes";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import BackgroundMain from '../img/main.jpg';

const AboutRoute = () => {
    return (
        <Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100vh",
                backgroundImage: `url(${BackgroundMain})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top"
            }}>
                <AppBar
                    elevation={0}
                    color="transparent"
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        height: "70px",
                        pl: "5%",
                        pr: "5%"
                    }}>
                    <Button
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "20px",
                            fontWeight: "bolder",
                            transition: "transform .3s",
                            ":hover": {
                                transform: "scale(1.3)",
                                bgcolor: "inherit"
                            }
                        }}>
                        youi
                    </Button>
                    <IconButton sx={{
                        color: (theme) => theme.palette.text.primary,
                        transition: "transform .3s",
                        ":hover": {
                            transform: "scale(1.3)",
                            bgcolor: "inherit"
                        }
                    }}>
                        <MenuIcon fontSize="large"
                        />
                    </IconButton>
                </AppBar>
                <Button
                    to={ABOUT_ROUTE}
                    component={RouterLink}
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                    sx={{
                        height: "60px",
                        color: (theme) => theme.palette.text.primary,
                        fontSize: "16px",
                        fontWeight: "bolder",
                        mb: "5%",
                        transition: "transform .4s",
                        ":hover": {
                            transform: "scale(1.3)",
                            bgcolor: "inherit"
                        }
                    }}>
                    join now
                </Button>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100vh",
                backgroundColor: "primary.main",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>

            </Box >
        </Box >
    );
};
export default AboutRoute;
