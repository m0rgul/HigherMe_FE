import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RunningActionState } from "./types";

const initialState: RunningActionState = {};

const runningActionsSlice = createSlice({
  name: "runningActions",
  initialState,
  reducers: {
    startAction(state, action: PayloadAction<string>) {
      const actionName = action.payload;
      state[actionName] = {
        isRunning: true,
        timestamps: [new Date().toISOString()],
      };
    },
    completeAction(state, action: PayloadAction<string>) {
      const actionName = action.payload;
      if (state[actionName]) {
        state[actionName].isRunning = false;
      }
    },
  },
});

export const { startAction, completeAction } = runningActionsSlice.actions;

export default runningActionsSlice.reducer;
