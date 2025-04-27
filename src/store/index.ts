import { configureStore } from "@reduxjs/toolkit";

import runningReducer from "./core/runningReducer";
import notificationsReducer from "./core/notificationsReducer";
import runningActionMiddleware from "./core/runningActionMiddleware";
import { NotificationsState } from "./types/notification";
import { RunningActionState } from "./types/runningAction";
import { UserState } from "./types/user";
import { userReducer } from "./user";

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
