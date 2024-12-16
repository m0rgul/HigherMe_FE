import { RootState } from ".";

export const actionIsRunning =
  (name: string) =>
  (state: RootState): boolean => {
    const runningObj = state.runningActions[name];
    return !!runningObj && runningObj.isRunning;
  };
