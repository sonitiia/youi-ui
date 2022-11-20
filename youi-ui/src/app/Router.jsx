import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import {
    DEFAULT_ROUTE,
    FULL_WIDTH_ROUTE,
} from "./Routes";
import DefaultContainer from "./layouts/DefaultContainer";
import FullWidthContainer from "./layouts/FullWidthContainer";
import PageNotFoundRoute from "../routes/PageNotFoundRoute";

const Router = () => {
    return (
        <Box>
            <Routes>
                <Route path={DEFAULT_ROUTE} element={<DefaultContainer />} >
                    <Route path="*" element={<PageNotFoundRoute />} />
                </Route>
                <Route path={FULL_WIDTH_ROUTE} element={<FullWidthContainer />} >
                    <Route path="*" element={<PageNotFoundRoute />} />
                </Route>
            </Routes>
        </Box>
    );
}

export default Router;