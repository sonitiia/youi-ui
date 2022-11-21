import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import {
    DEFAULT_ROUTE,
    FULL_WIDTH_ROUTE,
    LOGIN_ROUTE,
    FORGOT_PASSWORD,
    ABOUT_ROUTE,
    PROFILE_ROUTE,
    FOLLOWERS_ROUTE,
    FOLLOWING_ROUTE,
} from "./Routes";
import DefaultContainer from "./layouts/DefaultContainer";
import FullWidthContainer from "./layouts/FullWidthContainer";
import PageNotFoundRoute from "../routes/PageNotFoundRoute";
import LoginRoute from "../routes/LoginRoute";
import ForgotPasswordRoute from "../routes/ForgotPasswordRoute";
import AboutRoute from "../routes/AboutRoute";
import ProfileRoute from "../routes/ProfileRoute";
import Following from "../routes/Following";
import Followers from "../routes/Followers";

const Router = () => {
    return (
        <Box>
            <Routes>
                <Route path={DEFAULT_ROUTE} element={<DefaultContainer />} >
                    <Route path={LOGIN_ROUTE} element={<LoginRoute />} />
                    <Route path={FORGOT_PASSWORD} element={<ForgotPasswordRoute />} />
                    <Route path="*" element={<PageNotFoundRoute />} />
                </Route>
                <Route path={FULL_WIDTH_ROUTE} element={<FullWidthContainer />} >
                    <Route path={ABOUT_ROUTE} element={<AboutRoute />} />
                    <Route path={PROFILE_ROUTE} element={<ProfileRoute />} />
                    <Route path={FOLLOWERS_ROUTE} element={<Followers />} />
                    <Route path={FOLLOWING_ROUTE} element={<Following />} />
                    <Route path="*" element={<PageNotFoundRoute />} />
                </Route>
            </Routes>
        </Box>
    );
}

export default Router;