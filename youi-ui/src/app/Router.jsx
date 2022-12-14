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
    POST_ROUTE,
    REGISTRATION_ROUTE,
    MAIN_ROUTE,
} from "./Routes";
import DefaultContainer from "./layouts/DefaultContainer";
import PageNotFoundRoute from "../routes/PageNotFoundRoute";
import LoginRoute from "../routes/LoginRoute";
import ForgotPasswordRoute from "../routes/ForgotPasswordRoute";
import RegistrationRoute from "../routes/RegistrationRoute";
import FullWidthContainer from "./layouts/FullWidthContainer";
import MainRoute from "../routes/MainRoute";
import AboutRoute from "../routes/AboutRoute";
import ProfileRoute from "../routes/ProfileRoute";
import FollowersRoute from "../routes/FollowersRoute";
import FollowingRoute from "../routes/FollowingRoute";
import PostRoute from "../routes/PostRoute";

const Router = () => {
    return (
        <Box>
            <Routes>
                <Route path={DEFAULT_ROUTE} element={<DefaultContainer />} >
                    <Route path={LOGIN_ROUTE} element={<LoginRoute />} />
                    <Route path={LOGIN_ROUTE} element={<LoginRoute />} />
                    <Route path={FORGOT_PASSWORD} element={<ForgotPasswordRoute />} />
                    <Route path={REGISTRATION_ROUTE} element={<RegistrationRoute />} />
                    <Route path="*" element={<PageNotFoundRoute />} />
                </Route>
                <Route path={FULL_WIDTH_ROUTE} element={<FullWidthContainer />} >
                    <Route path={MAIN_ROUTE} element={<MainRoute />} />
                    <Route path={ABOUT_ROUTE} element={<AboutRoute />} />
                    <Route path={PROFILE_ROUTE} element={<ProfileRoute />} />
                    <Route path={POST_ROUTE} element={<PostRoute />} />
                    <Route path={FOLLOWERS_ROUTE} element={<FollowersRoute />} />
                    <Route path={FOLLOWING_ROUTE} element={<FollowingRoute />} />
                    <Route path="*" element={<PageNotFoundRoute />} />
                </Route>
            </Routes>
        </Box>
    );
}

export default Router;