import type { HomeCompetitionDTO } from "../../domain/home";

type HomeCompetitionViewProps = {
  competition: HomeCompetitionDTO;
};

function HomeCompetitionView({ competition }: HomeCompetitionViewProps) {
  return (
    <div className="h-100 p-4 p-md-5 border rounded-4 bg-body shadow-sm">
      <span className="text-uppercase small text-body-secondary">
        Competición
      </span>
      <h2 className="h5 fw-semibold mt-2 mb-2">{competition.title}</h2>
      <p className="text-body-emphasis mb-0">{competition.description}</p>
    </div>
  );
}

export default HomeCompetitionView;
