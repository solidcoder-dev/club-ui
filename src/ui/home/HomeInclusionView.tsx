import type { HomeInclusionDTO } from "../../domain/home";

type HomeInclusionViewProps = {
  inclusion: HomeInclusionDTO;
};

function HomeInclusionView({ inclusion }: HomeInclusionViewProps) {
  return (
    <div className="h-100 p-4 p-md-5 border rounded-4 bg-body shadow-sm">
      <span className="text-uppercase small text-body-secondary">
        Impacto social
      </span>
      <h2 className="h5 fw-semibold mt-2 mb-2">{inclusion.title}</h2>
      <p className="text-body-emphasis mb-0">{inclusion.description}</p>
    </div>
  );
}

export default HomeInclusionView;
