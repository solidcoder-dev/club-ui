export type NotificationPayload = {
  title: string;
  message: string;
  recipientEmail: string;
  attachmentDataUrl?: string;
  attachmentName?: string;
};

export interface NotificationPort {
  notify(payload: NotificationPayload): Promise<void>;
}
