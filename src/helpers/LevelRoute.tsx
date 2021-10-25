import { Navigate, useParams } from "react-router";

import { useAuth } from "../contexts";

function LevelRoute({ children }: { children: JSX.Element }) {
  const { level: userLevel } = useAuth();
  const { level } = useParams();

  if (userLevel !== level) {
    return <Navigate to="/" />;
  }

  return children;
}

export { LevelRoute };
