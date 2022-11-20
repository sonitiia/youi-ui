import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { DEFAULT_ROUTE } from "./../app/Routes";

const PageNotFoundRoute = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="80%"
        >
            <Typography variant="h4" pb={2}>
                Сторінку не знайдено
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                component={RouterLink}
                to={DEFAULT_ROUTE}
            >
                На головну
            </Button>
        </Box>
    );
};

export default PageNotFoundRoute;