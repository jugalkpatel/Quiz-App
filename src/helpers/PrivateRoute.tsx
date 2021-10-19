import { Route, RouteProps, useLocation, Navigate } from "react-router";

import { useAuth } from "../contexts";

function PrivateRoute({ path, ...props }: RouteProps) {
  const { authenticated } = useAuth();
  const location = useLocation();
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
