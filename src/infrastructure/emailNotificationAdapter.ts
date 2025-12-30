import emailjs from "@emailjs/browser";
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
    recipientEmail,
    attachmentDataUrl,
    attachmentName
  }: NotificationPayload) => {
    if (!config.serviceId || !config.templateId || !config.publicKey) return;

    await emailjs.send(
      config.serviceId,
      config.templateId,
      {
        title,
        message,
        to_email: recipientEmail,
        attachment: attachmentDataUrl,
        attachment_name: attachmentName
      },
      { publicKey: config.publicKey }
    );
  };

  return { notify };
}

export function createFakeEmailNotificationAdapter(
  config: EmailNotificationConfig
): NotificationPort {
  const notify = async ({
    title,
    message,
    recipientEmail,
    attachmentName
  }: NotificationPayload) => {
    if (!config.serviceId || !config.templateId || !config.publicKey) return;
    console.log(
      "Sending email to:",
      recipientEmail,
      "with message:",
      message,
      "attachment:",
      attachmentName
    );
  };

  return { notify };
}
