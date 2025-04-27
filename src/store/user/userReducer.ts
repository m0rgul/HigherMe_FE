import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { loginUser, verifyToken } from "./userThunks";
import { UserState, User } from "store/types/user";

const initialState: UserState = {
  user: {} as User,
  authenticated: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = { ...state.user, ...action.payload };
    },

    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authenticated = true;
    });

    builder.addCase(loginUser.rejected, (state) => {
      state.authenticated = false;
    });

    builder.addCase(verifyToken.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authenticated = true;
    });
    builder.addCase(verifyToken.rejected, (state) => {
      state.authenticated = false;
    });
  },
});

export const { setIsAuthenticated, setUser } = userSlice.actions;

export default userSlice.reducer;
