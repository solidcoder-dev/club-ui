export type TemplateVariables = Record<string, string>;
export type TemplateId = "sepaNotice" | "sepaAdminNotice";

export interface TemplateRendererPort {
  render(templateId: TemplateId, variables: TemplateVariables): string;
}
