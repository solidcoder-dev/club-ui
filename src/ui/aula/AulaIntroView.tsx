import type { AulaIntroDTO } from "../../domain/aula";

type AulaIntroViewProps = {
  intro: AulaIntroDTO;
};

function AulaIntroView({ intro }: AulaIntroViewProps) {
  return (
    <div className="mb-4 p-4 p-md-5 border rounded-4 bg-body-tertiary shadow-sm">
      <h2 className="h4 fw-semibold mb-2">{intro.title}</h2>
      <p className="text-body-emphasis mb-3">{intro.subtitle}</p>
      <p className="text-body-emphasis mb-0">{intro.description}</p>
    </div>
  );
}

export default AulaIntroView;
