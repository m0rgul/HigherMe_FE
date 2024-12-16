import { Middleware } from "redux";
import { completeAction, startAction } from "../runningReducer";
import { RootState } from "../..";
import { Action } from "@reduxjs/toolkit";

type AsyncAction =
  | Action<string>
  | { type: `${string}/pending` }
  | { type: `${string}/fulfilled` }
  | { type: `${string}/rejected` };

enum ActionStates {
  PENDNG = "/pending",
  FULFILLED = "/fulfilled",
  REJECTED = "/rejected",
}

const runningActionMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const typedAction = action as AsyncAction;
    if (typeof typedAction === "object" && typedAction.type) {
      const actionType = typedAction.type as string;

      if (actionType.endsWith(ActionStates.PENDNG)) {
        const baseAction = actionType.replace(ActionStates.PENDNG, "");
        store.dispatch(startAction(baseAction));
      } else if (actionType.endsWith("/fulfilled")) {
        const baseAction = actionType.replace(ActionStates.FULFILLED, "");
        store.dispatch(completeAction(baseAction));
      } else if (actionType.endsWith("/rejected")) {
        const baseAction = actionType.replace(ActionStates.REJECTED, "");
        store.dispatch(completeAction(baseAction));
      }
    }

    return next(action);
  };

export default runningActionMiddleware;
