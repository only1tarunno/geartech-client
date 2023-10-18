import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Provides/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PvtRoute = ({ children }) => {
  const { user, spiner } = useContext(AuthContext);

  const location = useLocation();

  if (spiner) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PvtRoute;
PvtRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
