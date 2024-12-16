import { configureStore } from "@reduxjs/toolkit";
import runningActionMiddleware from "./core/middleware/runningAction";

import notificationsReducer from "./core/notificationsReducer";
import runningReducer from "./core/runningReducer";
import userReducer from "./user/userReducer";

import { NotificationsState, RunningActionState } from "./core/types";
import { UserState } from "./user/types";

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    runningActions: runningReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(runningActionMiddleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;

export interface RootState {
  notifications: NotificationsState;
  runningActions: RunningActionState;
  user: UserState;
}
