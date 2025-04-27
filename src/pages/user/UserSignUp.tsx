import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AccountType } from "core/constants/enums/accountTypes";
import translate from "core/helpers/translate";
import { useAppDispatch } from "store/hooks";
import { actionIsRunning } from "store/selectors";
import { userThunks } from "store/user";
import ErrorText from "./UserFormErrorText";

type RegisterFormInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  role: AccountType;
};

const UserSignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit: SubmitHandler<RegisterFormInput> = async ({
    firstName,
    lastName,
    email,
    password,
    role,
  }) => {
    try {
      const result = await dispatch(
        userThunks.registerUser({ firstName, lastName, email, password, role })
      );
      if (userThunks.registerUser.fulfilled.match(result)) {
        navigate("/login");
      } else {
        console.log("Login failed:", result.payload || result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isLoading = useSelector(
    actionIsRunning(userThunks.ActionKeys.USER_REGISTER)
  );

  return (
    <div
      id="loginContainer"
      className="mx-auto my-auto px-10 py-10 rounded-lg border-2 border-gray-300 drop-shadow-md bg-white lg:w-[500px] w-[90%] sm:border-0 sm:drop-shadow-none"
    >
      <h1 className="text-4xl font-semibold text-black mb-4">
        {translate("register.signUp")}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-1">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              {translate("register.firstName")}
            </label>
            <input
              id="firstName"
              className={`block w-full h-10 px-2 border-2 border-solid ${
                errors.firstName ? "border-red-700" : "border-gray-600"
              }`}
              {...register("firstName", {
                required: translate("register.firstNameIsRequired"),
              })}
            />
            <ErrorText>{errors.firstName?.message}</ErrorText>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              {translate("register.lastName")}
            </label>
            <input
              id="lastName"
              className={`block w-full h-10 px-2 border-2 border-solid ${
                errors.lastName ? "border-red-700" : "border-gray-600"
              }`}
              {...register("lastName", {
                required: translate("register.lastNameIsRequired"),
              })}
            />
            <ErrorText>{errors.lastName?.message}</ErrorText>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              {translate("register.email")}
            </label>
            <input
              id="email"
              className={`block w-full h-10 px-2 border-2 border-solid ${
                errors.email ? "border-red-700" : "border-gray-600"
              }`}
              {...register("email", {
                required: translate("register.emailIsRequired"),
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: translate("register.invalidEmailAddress"),
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
              {translate("register.password")}
            </label>
            <input
              id="password"
              type="password"
              className={`block w-full h-10 px-2 border-2 border-solid ${
                errors.password ? "border-red-700" : "border-gray-600"
              }`}
              {...register("password", {
                required: translate("register.passwordIsRequired"),
                // minLength: {
                //   value: 8,
                //   message: translate("register.passwordMinLength"),
                // },
                // pattern: {
                //   value: /^(?=.*[A-Z])(?=.*\d).+$/,
                //   message: translate("register.passwordRequiredPattern"),
                // },
              })}
            />
            <ErrorText>{errors.password?.message}</ErrorText>
          </div>

          <div>
            <label
              htmlFor="retypePassword"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {translate("register.retypePassword")}
            </label>
            <input
              id="retypePassword"
              type="password"
              className={`block w-full h-10 px-2 border-2 border-solid ${
                errors.password ? "border-red-700" : "border-gray-600"
              }`}
              {...register("repeatPassword", {
                required: translate("register.passwordIsRequired"),
                validate: (newPass: string) => {
                  if (watch("password") !== newPass)
                    return translate("register.passwordsNotMatching");
                },
              })}
            />
            <ErrorText>{errors.repeatPassword?.message}</ErrorText>
          </div>

          <div className="flex flex-row items-baseline justify-evenly">
            <div className="flex items-center mb-4">
              <input
                id="invididualAccount"
                type="radio"
                value={AccountType.user}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                {...register("role", {
                  required: translate("register.noAccountType"),
                })}
              />
              <label
                htmlFor="invididualAccount"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {translate("register.individualAccount")}
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="companyAccount"
                type="radio"
                value={AccountType.company}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                {...register("role", {
                  required: translate("register.noAccountType"),
                })}
              />
              <label
                htmlFor="companyAccount"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {translate("register.companyAccount")}
              </label>
            </div>
          </div>
          <div className="flex-1 -mt-6">
            <ErrorText>{errors.role?.message}</ErrorText>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-blue-500 hover:bg-blue-700 font-bold px-4 py-4 text-white disabled:cursor-not-allowed disabled:opacity-50 mt-4"
            disabled={
              isLoading ||
              !!errors.firstName ||
              !!errors.lastName ||
              !!errors.email ||
              !!errors.password ||
              !!errors.repeatPassword
            }
          >
            {translate("register.signUp")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSignUp;
