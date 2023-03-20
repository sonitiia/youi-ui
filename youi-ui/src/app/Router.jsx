import { Box } from "@mui/system";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import FullWidthLayout from "./layouts/FullWidthLayout";
import { DEFAULT_ROUTE, FULL_WIDTH_ROUTE, NOT_FOUND_ROUTE } from "./Routes";
import PageNotFoundRoute from "./routes/PageNotFoundRoute";


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
                    <Route path={NOT_FOUND_ROUTE} element={<PageNotFoundRoute />} />
                    <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE} replace />} />
                </Route>
                <Route path={FULL_WIDTH_ROUTE} element={< FullWidthLayout />} >
                    <Route path={NOT_FOUND_ROUTE} element={<PageNotFoundRoute />} />
                    <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE} replace />} />
                </Route>
            </Routes>
        </Box>
    );
}

export default Router;