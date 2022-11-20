import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
    FORGOT_PASSWORD,
} from "./../app/Routes";

const LoginRoute = () => {
    return (
        <Grid container spacing={4} sx={{ mt: "5%", display: "flex", flexDirection: "column" }}>
            <Grid item xs={12}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        mb: "10%",
                        color: (theme) => theme.palette.text.contrastText
                    }}
                >
                    Log into youi
                </Typography>
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
                <Typography >
                    <Link
                        color="primary"
                        variant="caption"
                        to={FORGOT_PASSWORD}
                        component={RouterLink}
                        sx={{
                            color: (theme) => theme.palette.text.contrastText
                        }}
                    >
                        Can't login?
                    </Link>
                </Typography>
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
                <Button fullWidth
                    sx={{
                        height: "60px",
                        bgcolor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.text.primary,
                        borderRadius: "30px",
                        fontSize: "18px",
                        fontWeight: "bolder",
                    }}
                >
                    continue
                </Button>
            </Grid>
        </Grid>
    );
};

export default LoginRoute;
