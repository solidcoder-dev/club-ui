import type {
  ClientContext,
  ClientContextPort
} from "../ports/client-context-port";

const getUserAgent = () => {
  if (typeof navigator === "undefined") return "unknown";
  return navigator.userAgent || "unknown";
};

const fetchIpAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) return "unknown";
    const data = (await response.json()) as { ip?: string };
    return data.ip || "unknown";
  } catch {
    return "unknown";
  }
};

export function createBrowserClientContextAdapter(): ClientContextPort {
  const getClientContext = async (): Promise<ClientContext> => {
    return {
      ipAddress: await fetchIpAddress(),
      userAgent: getUserAgent()
    };
  };

  return { getClientContext };
}
