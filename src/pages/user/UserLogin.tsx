import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import translate from "core/helpers/translate";
import { useAppDispatch } from "store/hooks";
import { actionIsRunning } from "store/selectors";
import { userThunks } from "store/user";
import ErrorText from "./UserFormErrorText";

type LoginInputForm = {
  email: string;
  password: string;
};

const UserLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputForm>();

  const onSubmit: SubmitHandler<LoginInputForm> = async ({
    email,
    password,
  }) => {
    const redirectTo = location.state?.from?.pathname || "/feed";

    try {
      const result = await dispatch(userThunks.loginUser({ email, password }));
      if (userThunks.loginUser.fulfilled.match(result)) {
        navigate(redirectTo, { replace: true });
      } else {
        console.log("Login failed:", result.payload || result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isLoading = useSelector(
    actionIsRunning(userThunks.ActionKeys.USER_LOGIN)
  );

  return (
    <div id="loginContainer" className="flex h-full w-full mt-auto mb-auto">
      <div className="mx-auto my-auto px-10 py-10 rounded-lg border-2 border-gray-300 drop-shadow-md bg-white lg:w-[400px] w-[90%] sm:border-0 sm:drop-shadow-none">
        <h1 className="text-4xl font-semibold text-black mb-4">
          {translate("login.signIn")}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 md:grid-cols-1">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                {translate("login.email")}
              </label>
              <input
                id="email"
                className={`block w-full h-10 px-2 border-2 border-solid ${
                  errors.email ? "border-red-700" : "border-gray-600"
                }`}
                {...register("email", {
                  required: translate("login.emailIsRequired"),
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: translate("login.invalidEmailAddress"),
                  },
                })}
              />
              <ErrorText>{errors.email?.message}</ErrorText>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {translate("login.password")}
              </label>
              <input
                type="password"
                className={`block w-full h-10 px-2 border-2 border-solid ${
                  errors.password ? "border-red-700" : "border-gray-600"
                }`}
                {...register("password", {
                  required: translate("login.passwordIsRequired"),
                })}
              />
              <ErrorText>{errors.password?.message}</ErrorText>
            </div>
            <div>
              <Link
                to={"/forgot-password"}
                className="text-md italic text-blue-900 hover:text-blue-700"
              >
                {translate("login.forgotPassword")}
              </Link>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gray-700 hover:bg-gray-900 font-bold px-4 py-4 text-white disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!!errors.email || !!errors.password || isLoading}
            >
              {translate("login.signIn")}
            </button>

            <div>
              <p className="text-md text-black block">
                {translate("login.noAccount")}
                <span className="mx-1">
                  <Link
                    to={"/auth/signup"}
                    className="text-md font-medium text-blue-900 hover:text-blue-700"
                  >
                    {translate("login.signUp")}
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
