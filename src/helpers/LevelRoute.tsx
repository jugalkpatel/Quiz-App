import { Navigate, useParams } from "react-router";

import { useAuth } from "../contexts";

function LevelRoute({ children }: { children: JSX.Element }) {
  const { level } = useAuth();
  const { level: rank } = useParams();

  if (level !== rank) {
    return <Navigate to="/" />;
  }

  return children;
}

export { LevelRoute };
