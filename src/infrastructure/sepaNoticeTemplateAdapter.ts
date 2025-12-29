import type {
  TemplateRendererPort,
  TemplateVariables
} from "../ports/template-renderer-port";
import sepaNoticeTemplate from "./templates/sepaNotice.html?raw";

const renderTemplate = (template: string, variables: TemplateVariables) => {
  return Object.entries(variables).reduce((acc, [key, value]) => {
    const pattern = new RegExp(`{{${key}}}`, "g");
    return acc.replace(pattern, value);
  }, template);
};

export function createSepaNoticeTemplateAdapter(): TemplateRendererPort {
  const render = (variables: TemplateVariables) =>
    renderTemplate(sepaNoticeTemplate, variables);

  return { render };
}
