export type TemplateVariables = Record<string, string>;

export interface TemplateRendererPort {
  render(variables: TemplateVariables): string;
}
