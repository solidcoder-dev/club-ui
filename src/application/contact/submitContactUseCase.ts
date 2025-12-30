import type { NotificationPort } from "../../ports/notification-port";

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
  recipientEmail: string;
};

export const createSubmitContactUseCase =
  (notificationPort: NotificationPort) => async (payload: ContactMessage) => {
    await notificationPort.notify({
      title: "Solicitud de contacto",
      message: `Nombre: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
      recipientEmail: payload.recipientEmail
    });
  };
