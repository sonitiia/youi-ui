import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { PROFILE_ROUTE } from "../app/Routes";
import { Link as RouterLink } from "react-router-dom";
import ProfileRoute from "./ProfileRoute";
import UserAndAvatar from "../components/UserAndAvatar";

const FollowersRoute = () => {
    return (
        <Box>
            <Dialog
                fullWidth
                onClose={() => { }}
                open={true}
                sx={{
                    backdropFilter: "blur(5px)",
                }}
                PaperProps={{
                    sx: {
                        width: "80%",
                        maxWidth: "800px !important",
                        height: "70%",
                        p: 8,
                        borderRadius: 2
                    },
                }}>
                <DialogTitle
                    variant="h5"
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ color: (theme) => theme.palette.primary.main }}
                >
                    18 followers
                </DialogTitle>
                <DialogContent sx={{ p: 0 }}>
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                    <UserAndAvatar />
                </DialogContent>
                <DialogActions>
                    <Button
                        fullWidth
                        to={PROFILE_ROUTE}
                        component={RouterLink}
                        sx={{
                            height: "60px",
                            bgcolor: (theme) => theme.palette.primary.main,
                            color: (theme) => theme.palette.text.primary,
                            borderRadius: 3,
                            fontSize: "18px",
                            fontWeight: "bolder",
                            mt: 3
                        }}
                    >
                        back
                    </Button>
                </DialogActions>
            </Dialog>
            <ProfileRoute></ProfileRoute>
        </Box>
    );
}

export default FollowersRoute;