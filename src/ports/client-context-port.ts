export type ClientContext = {
  ipAddress: string;
  userAgent: string;
};

export interface ClientContextPort {
  getClientContext(): Promise<ClientContext>;
}
