import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <Container disableGutters maxWidth="sm">
            <Outlet />
        </Container>
    );
};

export default DefaultLayout;
