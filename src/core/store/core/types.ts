// Notification interfaces
export interface Notification {
  id: string;
  message: string;
  duration?: number;
}

export interface NotificationsState {
  notifications: Notification[];
}

// Running Action
export interface RunningActionState {
  [key: string]: {
    isRunning: boolean;
    timestamps: string[];
  };
}
