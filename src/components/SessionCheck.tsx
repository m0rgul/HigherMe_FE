import { PropsWithChildren, useEffect } from "react";

import LoadingOverlay from "./LoadingOverlay";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { userThunks } from "store/user";

const SessionCheck: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  const authenticated = useAppSelector((state) => state.user.authenticated);

  useEffect(() => {
    if (authenticated === undefined) dispatch(userThunks.verifyToken());
  }, []);

  return (
    <>
      {authenticated === undefined ? <LoadingOverlay opacity={1} /> : children}
    </>
  );
};

export default SessionCheck;
