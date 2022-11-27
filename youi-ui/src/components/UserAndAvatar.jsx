import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import avatar from "../img/avatar.png";

const UserAndAvatar = () => {
    return (
        <Box
            sx={{
                width: "fit-content",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer"
            }}
        >
            <Avatar alt="Profile icon"
                variant="circular"
                src={avatar}
                sx={{
                    width: 22,
                    height: 22,
                    mr: 1
                }} />
            <Typography
                variant="body1"
                sx={{ color: (theme) => theme.palette.primary.main }}
            >sofitymechko</Typography>
        </Box >
    );
}

export default UserAndAvatar;