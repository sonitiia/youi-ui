import * as React from 'react';
import { Box, Button, Card, Grid, IconButton, } from "@mui/material";
import Post from "../img/sunset.jpg";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserAndAvatar from '../components/UserAndAvatar';

const PostRoute = () => {
    return (
        <Card
            elevation={0}
            sx={{
                maxWidth: "1300px",
                width: "80%",
                height: "700px",
                my: 10,
                mx: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: 2
            }}>
            <Card
                elevation={0}
                sx={{
                    height: "100%",
                    maxWidth: "650px",
                    width: "50%",
                    backgroundImage: `url(${Post})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    borderRadius: 2,
                }}>
            </Card>
            <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 7
                }}>
                <Grid container>
                    <Grid item xs={12}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }}>
                        <IconButton sx={{ p: 0, width: 50, height: 50 }}>
                            <MoreVertIcon sx={{ color: (theme) => theme.palette.primary.main }} />
                        </IconButton>
                        <Button
                            sx={{
                                height: 50,
                                width: 90,
                                borderRadius: 2,
                                bgcolor: (theme) => theme.palette.primary.main,
                                color: (theme) => theme.palette.text.primary,
                                ml: 3
                            }}>
                            save
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <UserAndAvatar />
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
};

export default PostRoute;