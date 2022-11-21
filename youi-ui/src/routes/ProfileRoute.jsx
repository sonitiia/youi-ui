import { Avatar, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
    FOLLOWERS_ROUTE,
    FOLLOWING_ROUTE
} from "./../app/Routes";
import avatar from "../img/avatar.png";
import PostsLayout from "../components/posts-layout/PostsLayout";

const ProfileRoute = () => {
    return (
        <Grid container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Grid item xs={12}>
                {/* // header */}
            </Grid>
            <Grid item xs={12} sx={{ my: 2 }}>
                <Avatar alt="Profile icon"
                    variant="circular"
                    src={avatar}
                    sx={{
                        width: 200,
                        height: 200,
                    }} />
            </Grid>
            <Grid item xs={12} sx={{ my: 1 }}>
                <Typography
                    variant="h3"
                    textAlign="center"
                    fontWeight="bold"
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                    }}
                >sofi tymechko
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: 1 }}>
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{
                        color: (theme) => theme.palette.primary.main

                    }}
                >rough & emotional rough & emotional rough & emotional
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: 1 }}>
                <Typography
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: 200
                    }}>
                    <Link
                        color="primary"
                        variant="caption"
                        to={FOLLOWERS_ROUTE}
                        component={RouterLink}
                        sx={{
                            color: (theme) => theme.palette.text.contrastText,
                        }}
                    >
                        18 followers
                    </Link>
                    <Link
                        color="primary"
                        variant="caption"
                        to={FOLLOWING_ROUTE}
                        component={RouterLink}
                        sx={{
                            color: (theme) => theme.palette.text.contrastText
                        }}
                    >
                        18 following
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <PostsLayout></PostsLayout>
            </Grid>
        </Grid>
    );
};

export default ProfileRoute;