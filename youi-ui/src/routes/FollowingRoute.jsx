import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { PROFILE_ROUTE } from "../app/Routes";
import { Link as RouterLink } from "react-router-dom";
import ProfileRoute from "./ProfileRoute";
import FollowerBox from "../components/FollowerBox";

const Following = () => {
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
                    18 following
                </DialogTitle>
                <DialogContent sx={{ p: 0 }}>
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
                    <FollowerBox />
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

export default Following;


// const Followers = () => {
//     return (
//         <>
//             <Card elevation={0}
//                 sx={{
//                     zIndex: 999,
//                     height: "70%",
//                     position: "fixed",
//                     top: "50%",
//                     left: "50%",
//                     maxWidth: "800px",
//                     width: "80%",
//                     transform: "translate(-50%, -50%)",
//                     background: (theme) => theme.palette.background.paper,
//                 }}>
//                 <Box
//                     sx={{
//                         display: "flex",
//                         flexDirection: "row",
//                         justifyContent: "space-between"
//                     }}>
//                     <Typography>18 followers</Typography>
//                     <Button>subscribe</Button>
//                 </Box>
//             </Card >
//             <ProfileRoute sx={{ backdropFilter: "sepia(90%)" }}>
//             </ProfileRoute>
//         </>
//     );
// };

// export default Followers;