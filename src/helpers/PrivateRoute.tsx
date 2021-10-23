import { useLocation, Navigate } from "react-router";

import { useAuth } from "../contexts";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { authenticated } = useAuth();
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export { PrivateRoute };
