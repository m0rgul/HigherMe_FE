export interface RunningActionState {
  [key: string]: {
    isRunning: boolean;
    timestamps: string[];
  };
}
