import type { JoinIntroDTO } from "../../domain/joinContent";

type JoinIntroViewProps = {
  intro: JoinIntroDTO;
};

function JoinIntroView({ intro }: JoinIntroViewProps) {
  return (
    <div className="mb-4 p-4 p-md-5 border rounded-4 bg-body-tertiary shadow-sm">
      <span className="text-uppercase small text-body-secondary">
        Cuota de entrenamiento
      </span>
      <h2 className="h3 fw-semibold mt-2 mb-2">{intro.title}</h2>
      <p className="lead mb-3">{intro.subtitle}</p>
      <p className="text-body-emphasis mb-0">{intro.description}</p>
      <ul className="list-unstyled mt-4 mb-0 d-grid gap-2">
        {intro.highlights.map((highlight) => (
          <li key={highlight} className="d-flex gap-2 align-items-start">
            <span className="badge rounded-pill bg-primary-subtle text-primary-emphasis">
              ✓
            </span>
            <span className="text-body-emphasis">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JoinIntroView;
