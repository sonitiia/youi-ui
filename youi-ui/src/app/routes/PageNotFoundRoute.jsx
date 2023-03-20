import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { DEFAULT_ROUTE } from "../Routes";
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';

const PageNotFoundRoute = () => {
    return (
        <Stack
            alignItems="center"
        >
            <Typography variant="h6">
                Oops, page not found.
            </Typography>
            <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to={DEFAULT_ROUTE}
                startIcon={<KeyboardReturnRoundedIcon />}
            >
                Return to Main page
            </Button>
        </Stack>
    );
};

export default PageNotFoundRoute;