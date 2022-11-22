import * as React from 'react';
import { Box, Button, Card, IconButton } from "@mui/material";
import Post from "../img/sunset-small.jpg";
import UserAndAvatar from "../components/UserAndAvatar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentList from '../components/comment/CommentList';

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
                borderRadius: 2,
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
                    // alignItems: "center",
                    p: 10,
                }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
                >
                    <UserAndAvatar />
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
                            ml: 1
                        }}>
                        save
                    </Button>
                </Box>
                <CommentList />
            </Box>
        </Card >
    );
};

export default PostRoute;