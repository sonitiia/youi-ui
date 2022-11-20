import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

const FullWidthContainer = () => {
    return (
        <Container disableGutters maxWidth="xxxl">
            <Outlet />
        </Container>
    );
};

export default FullWidthContainer;
