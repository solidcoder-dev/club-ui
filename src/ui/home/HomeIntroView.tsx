import type { HomeIntroDTO } from "../../domain/home";

type HomeIntroViewProps = {
  intro: HomeIntroDTO;
};

function HomeIntroView({ intro }: HomeIntroViewProps) {
  return (
    <div className="mb-4 p-4 p-md-5 border rounded-4 bg-body-tertiary shadow-sm">
      <span className="text-uppercase small text-body-secondary">
        Club de Rugby
      </span>
      <h1 className="h3 fw-semibold mt-2 mb-2">{intro.title}</h1>
      <p className="lead mb-3">{intro.subtitle}</p>
      <p className="text-body-emphasis mb-0">{intro.description}</p>
    </div>
  );
}

export default HomeIntroView;
