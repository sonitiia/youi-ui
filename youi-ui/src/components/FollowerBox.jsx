import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import avatar from "../img/avatar.png";

const FollowerBox = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                color: (theme) => theme.palette.primary.main
            }}
        >
            <Box
                sx={{
                    my: 3,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Avatar alt="Profile icon"
                    variant="circular"
                    src={avatar}
                    sx={{
                        width: 30,
                        height: 30,
                        mr: 2
                    }} />
                <Typography variant="body2">sofitymechko</Typography>
            </Box>
            <Button
                sx={{
                    background: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.primary.light,
                    p: 2,
                    fontSize: 10,
                    borderRadius: 3
                }}
            >follow</Button>
        </Box>
    );
}

export default FollowerBox;