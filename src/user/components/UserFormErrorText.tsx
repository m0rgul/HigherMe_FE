import { PropsWithChildren } from "react";

const ErrorText: React.FC<PropsWithChildren> = ({ children }) => (
  <p className="text-red-700 font-light text-sm mt-1 px-1">{children}</p>
);

export default ErrorText;
