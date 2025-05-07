import { Navigate, Outlet } from "react-router-dom";
import { routesPath } from "../../lib/routesPath";
//import PropTypes from "prop-types";

export const PrivateRoute = ({ isAuth }) => {
    return isAuth ? <Outlet /> : <Navigate to = {routesPath.LOGIN} />;
}

//PrivateRoute.propTypes = {
//  isAuth: PropTypes.bool.isRequired,
//  navigateTo: PropTypes.string,
//};