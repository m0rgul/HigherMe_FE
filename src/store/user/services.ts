import { AxiosResponse } from "axios";
import { AccountType } from "core/constants/enums/accountTypes";
import HTTP from "core/services/http";
import { User } from "../types/user";

export const doAuth = (): Promise<AxiosResponse<User>> =>
  HTTP.get("/user/verify-token");

export const doLogin = (
  email: string,
  password: string
  // rememberMe?: boolean
): Promise<AxiosResponse<User>> =>
  HTTP.post("/user/login", { email, password });

export const doRegister = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: AccountType
): Promise<AxiosResponse> =>
  HTTP.post("/user/signUp", {
    firstName,
    lastName,
    email,
    password,
    role,
  });
