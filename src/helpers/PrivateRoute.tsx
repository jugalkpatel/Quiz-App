import React from "react";
import { Route, RouteProps, useLocation, Navigate } from "react-router";

import { useAuth } from "../contexts";

function PrivateRoute({ path, ...props }: RouteProps) {
  const { authenticated } = useAuth();
  const location = useLocation();
  console.log(location);
  return (
    <>
      {authenticated ? (
        <Route path={path} {...props} />
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  );
}

export { PrivateRoute };
