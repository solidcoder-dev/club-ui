import type {
  TemplateId,
  TemplateRendererPort,
  TemplateVariables
} from "../ports/template-renderer-port";
import sepaNoticeTemplate from "./templates/sepaNotice.html?raw";
import sepaAdminNoticeTemplate from "./templates/sepaAdminNotice.html?raw";

const renderTemplate = (template: string, variables: TemplateVariables) => {
  return Object.entries(variables).reduce((acc, [key, value]) => {
    const pattern = new RegExp(`{{${key}}}`, "g");
    return acc.replace(pattern, value);
  }, template);
};

export function createSepaNoticeTemplateAdapter(): TemplateRendererPort {
  const render = (templateId: TemplateId, variables: TemplateVariables) => {
    const template =
      templateId === "sepaAdminNotice"
        ? sepaAdminNoticeTemplate
        : sepaNoticeTemplate;
    return renderTemplate(template, variables);
  };

  return { render };
}
