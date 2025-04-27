import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationsState } from "../types/notification";

const initialState: NotificationsState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

// Export actions and reducer
export const { addNotification, removeNotification } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
