import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import FullWidthLayout from "./layouts/FullWidthLayout";
import PageNotFoundRoute from "./layouts/routes/PageNotFoundRoute";
import { DEFAULT_ROUTE, FULL_WIDTH_ROUTE } from "./Routes";


const Router = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Routes>
                <Route path={DEFAULT_ROUTE} element={<DefaultLayout />} >
                    <Route path="*" element={<PageNotFoundRoute />} />
                </Route>
                <Route path={FULL_WIDTH_ROUTE} element={< FullWidthLayout />} >
                    <Route path="*" element={<PageNotFoundRoute />} />
                </Route>
            </Routes>
        </Box>
    );
}

export default Router;