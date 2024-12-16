import translate from "../../core/helpers/translate";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div
      id="loginContainer"
      className="mx-auto my-auto px-10 py-10 rounded-lg border-2 border-gray-300 drop-shadow-md bg-white lg:w-[500px] w-[90%] sm:border-0 sm:drop-shadow-none"
    >
      <h1 className="text-4xl font-semibold text-black mb-4">
        {translate("forgotPassword.forgotPassword")}
      </h1>
    </div>
  );
};

export default ForgotPasswordPage;
