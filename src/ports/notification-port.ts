export type NotificationPayload = {
  title: string;
  message: string;
  recipientEmail: string;
};

export interface NotificationPort {
  notify(payload: NotificationPayload): Promise<void>;
}
