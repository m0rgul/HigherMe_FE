import { createAsyncThunk } from "@reduxjs/toolkit";

import { doAuth, doLogin, doRegister } from "./services";
import { User } from "./types";
import { AccountType } from "../../constants/enums/accountTypes";

export enum ActionKeys {
  USER_LOGIN = "user/USER_LOGIN",
  USER_REGISTER = "user/USER_REGISTER",
  USER_AUTHENTICATE = "user/USER_AUTHENTICATE",
  USER_GET_PROFILE = "user/USER_GET_PROFILE",
}

export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string }
>(ActionKeys.USER_LOGIN, async (credentials, { rejectWithValue }) => {
  try {
    const response = await doLogin(credentials.email, credentials.password);

    if (response.status !== 200) {
      return rejectWithValue(`Login failed with status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    return rejectWithValue((error as Error).message || "Login failed");
  }
});

export const verifyToken = createAsyncThunk<User>(
  ActionKeys.USER_AUTHENTICATE,
  async (_, { rejectWithValue }) => {
    try {
      const response = await doAuth();

      if (response.status !== 200) {
        return rejectWithValue(
          `Token verification failed with status: ${response.status}`
        );
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "Token verification failed"
      );
    }
  }
);

export const registerUser = createAsyncThunk<
  void,
  {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: AccountType;
  }
>(
  ActionKeys.USER_REGISTER,
  async (
    { firstName, lastName, email, password, role },
    { rejectWithValue }
  ) => {
    try {
      const response = await doRegister(
        firstName,
        lastName,
        email,
        password,
        role
      );

      console.log(response);

      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(
          `User creation failed with status: ${response.status}`
        );
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || "User creation failed"
      );
    }
  }
);
