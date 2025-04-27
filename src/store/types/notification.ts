export interface Notification {
  id: string;
  message: string;
  duration?: number;
}

export interface NotificationsState {
  notifications: Notification[];
}
