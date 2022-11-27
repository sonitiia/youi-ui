import * as React from 'react';
import { Box, Button, Card, IconButton } from "@mui/material";
import UserAndAvatar from "../components/UserAndAvatar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentList from '../components/comment/CommentList';

const PostRoute = () => {
    return (
        <Card
            elevation={0}
            sx={{
                boxShadow: "0 0 55px #dcdee0",
                background: (theme) => theme.palette.secondary.main,
                maxWidth: "1300px",
                width: "80%",
                height: { xs: "800px", md: "700px" },
                my: 10,
                mx: "auto",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "flex-start", md: "space-between" },
                borderRadius: 8,
            }}>
            <Card
                elevation={0}
                sx={{
                    minHeight: { xs: "50%", md: "100%" },
                    maxWidth: { xs: "100%", md: "650px" },
                    width: { xs: "100%", md: "50%" },
                    backgroundImage: `url(${"https://i.pinimg.com/564x/aa/82/02/aa82021347e8729119e4ca8737e0ba34.jpg"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    borderRadius: 7,
                }}>
            </Card>
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    px: 6,
                    py: 8
                }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
                >
                    <UserAndAvatar />
                    <Box>
                        <IconButton sx={{ p: 0, width: 30, height: 30 }}>
                            <MoreVertIcon sx={{ color: (theme) => theme.palette.primary.main }} />
                        </IconButton>
                        <Button
                            sx={{
                                height: 50,
                                width: 90,
                                borderRadius: 2,
                                bgcolor: (theme) => theme.palette.primary.main,
                                color: (theme) => theme.palette.text.primary,
                                ml: 1
                            }}>
                            save
                        </Button>
                    </Box>
                </Box>
                <CommentList />
            </Box>
        </Card >
    );
};

export default PostRoute;