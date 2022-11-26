import React from "react";
import { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { ABOUT_ROUTE, DEFAULT_ROUTE, LOGIN_ROUTE } from "../app/Routes";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {
    const [showNavigation, setShowNavigation] = useState(false);
    const drawer = (
        <>
            <Divider />
            <List
                disablePadding
                sx={{
                    color: (theme) => theme.palette.primary.main
                }}>
                <ListItemButton
                    to={DEFAULT_ROUTE}
                    sx={{
                        height: 56,
                        background: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.primary.light,
                    }}
                >
                    <ListItemText>
                        <Typography
                            variant="h5"
                            noWrap
                        >
                            YOUI
                        </Typography>
                    </ListItemText>
                </ListItemButton>
                <ListItemButton
                    to={ABOUT_ROUTE}>
                    <ListItemText>About</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText>Help</ListItemText>
                </ListItemButton>
                <ListItemButton
                    to={LOGIN_ROUTE}>
                    <ListItemText>Login / Sign up</ListItemText>
                </ListItemButton>
                <ListItemButton
                    to={LOGIN_ROUTE}>
                    <ListItemText>Logout</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText>Settings</ListItemText>
                </ListItemButton>
            </List>
        </ >
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => setShowNavigation((prev) => !prev)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        YOUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={showNavigation}
                disablePortal
                onClose={() => setShowNavigation(false)}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 350 },
                    backdropFilter: "blur(3px)",
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
}