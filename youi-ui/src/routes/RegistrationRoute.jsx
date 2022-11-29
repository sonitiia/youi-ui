import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
    PROFILE_ROUTE,
} from "./../app/Routes";

const RegistrationRoute = () => {
    return (
        <Grid container spacing={4} sx={{ mt: "5%", display: "flex", flexDirection: "column" }}>
            <Grid item xs={12}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        mb: 3,
                        color: (theme) => theme.palette.text.contrastText
                    }}
                >
                    Create your youi account
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    variant="standard"
                    type="text"
                    id="username"
                    label="Username"
                    InputProps={{
                        sx: {
                            color: (theme) => theme.palette.text.contrastText
                        }
                    }}
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: (theme) => theme.palette.text.contrastText
                        },
                        "& .MuiOutlinedInput-root": {
                            "&:hover fieldset": {
                                borderColor: (theme) => theme.palette.text.contrastText
                            },
                        }
                    }}
                >
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    type="email"
                    id="email"
                    label="Email"
                    InputProps={{
                        sx: {
                            color: (theme) => theme.palette.text.contrastText
                        }
                    }}
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: (theme) => theme.palette.text.contrastText
                        },
                        "& .MuiOutlinedInput-root": {
                            "&:hover fieldset": {
                                borderColor: (theme) => theme.palette.text.contrastText
                            },
                        }
                    }}
                >
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    type="password"
                    id="password"
                    label="Password"
                    InputProps={{
                        sx: {
                            color: (theme) => theme.palette.text.contrastText,

                        }
                    }}
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: (theme) => theme.palette.text.contrastText
                        },
                        "& .MuiOutlinedInput-root": {
                            "&:hover fieldset": {
                                borderColor: (theme) => theme.palette.text.contrastText
                            },
                        },
                    }}
                >
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    type="password"
                    id="password"
                    label="Confirm password"
                    InputProps={{
                        sx: {
                            color: (theme) => theme.palette.text.contrastText,

                        }
                    }}
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: (theme) => theme.palette.text.contrastText
                        },
                        "& .MuiOutlinedInput-root": {
                            "&:hover fieldset": {
                                borderColor: (theme) => theme.palette.text.contrastText
                            },
                        },
                    }}
                >
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="body1"
                    sx={{
                        color: (theme) => theme.palette.text.contrastText
                    }}
                >
                    By continuing, I agree to <b>youi's</b> Privacy Policy and Terms of Use.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    to={PROFILE_ROUTE}
                    component={RouterLink}
                    sx={{
                        height: "60px",
                        bgcolor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.text.primary,
                        borderRadius: 2,
                        fontSize: 18,
                        fontWeight: "bolder",
                    }}
                >
                    continue
                </Button>
            </Grid>
        </Grid>
    );
};

export default RegistrationRoute;
