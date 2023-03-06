import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { DEFAULT_ROUTE } from "../../Routes";

const PageNotFoundRoute = () => {
    return (
        <Stack
            spacing={5}
            mt={10}
        >
            <Typography variant="h2">
                Oops, page not found.
            </Typography>
            <Button
                variant="contained"
                component={RouterLink}
                to={DEFAULT_ROUTE}
                sx={{ p: 5 }}
            >
                <Typography variant="h4">
                    Return to Main page.
                </Typography>
            </Button>
        </Stack>
    );
};

export default PageNotFoundRoute;