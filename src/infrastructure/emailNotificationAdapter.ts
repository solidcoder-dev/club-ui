import type {
  NotificationPayload,
  NotificationPort
} from "../ports/notification-port";

type EmailNotificationConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

export function createEmailNotificationAdapter(
  config: EmailNotificationConfig
): NotificationPort {
  const notify = async ({
    title,
    message,
    recipientEmail
  }: NotificationPayload) => {
    if (!config.serviceId || !config.templateId || !config.publicKey) return;

    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: config.serviceId,
        template_id: config.templateId,
        user_id: config.publicKey,
        template_params: {
          title,
          message,
          to_email: recipientEmail
        }
      })
    });
  };

  return { notify };
}
