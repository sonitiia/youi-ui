import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

const FullWidthLayout = () => {
    return (
        <Container disableGutters maxWidth="xl">
            <Outlet />
        </Container>
    );
};

export default FullWidthLayout;
