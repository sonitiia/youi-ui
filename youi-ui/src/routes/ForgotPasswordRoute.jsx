import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../app/Routes";

const ForgotPasswordRoute = () => {

    return (
        <Grid container spacing={4} sx={{ mt: "5%", display: "flex", flexDirection: "column" }}>
            <Grid item xs={12}>
                <Typography
                    variant="h4"
                    textAlign="center"
                    fontWeight="bold"
                    sx={{
                        mb: "10%",
                        color: (theme) => theme.palette.text.contrastText
                    }}
                >
                    Forgot Password
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{
                        color: (theme) => theme.palette.text.contrastText
                    }}
                >
                    Enter your account’s email and we’ll send you an email to reset the password.
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
                <Button
                    fullWidth
                    to={LOGIN_ROUTE}
                    component={RouterLink}
                    sx={{
                        height: "60px",
                        bgcolor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.text.primary,
                        borderRadius: "30px",
                        fontSize: "18px",
                        fontWeight: "bolder",
                    }}
                >
                    send email
                </Button>
            </Grid>
        </Grid>
    );
};
export default ForgotPasswordRoute;
