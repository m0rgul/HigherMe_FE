import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useAppDispatch } from "store/hooks";
import { actionIsRunning } from "store/selectors";
import { userThunks } from "store/user";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);

  const isLoading = useSelector(
    actionIsRunning(userThunks.ActionKeys.USER_LOGIN)
  );

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const redirectTo = location.state?.from?.pathname || "/home";
    console.log();

    if (!email || !password) {
      setError("Missing fields.");
      return;
    }

    setError(null);

    try {
      const result = await dispatch(userThunks.loginUser({ email, password }));
      console.log({ result, redirectTo });
      if (userThunks.loginUser.fulfilled.match(result)) {
        navigate(redirectTo, { replace: true });
      } else {
        console.log("Login failed:", result.payload || result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { handleLogin, error, isLoading };
};

export default useAuth;
