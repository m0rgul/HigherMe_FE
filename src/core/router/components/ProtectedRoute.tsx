import { PropsWithChildren } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const authenticated = useAppSelector((state) => state.user.authenticated);
  const location = useLocation();

  if (authenticated !== undefined && !authenticated)
    return <Navigate to={"/login"} replace state={{ from: location }} />;

  return children;
};

export default ProtectedRoute;
