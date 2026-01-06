import { Link } from "react-router-dom";
import type { HomeSponsorsDTO } from "../../domain/home";

type HomeSponsorsViewProps = {
  sponsors: HomeSponsorsDTO;
};

function HomeSponsorsView({ sponsors }: HomeSponsorsViewProps) {
  return (
    <div className="h-100 p-4 p-md-5 border rounded-4 bg-primary-subtle">
      <span className="text-uppercase small text-body-secondary">
        Sponsors
      </span>
      <h2 className="h5 fw-semibold mt-2 mb-2">{sponsors.title}</h2>
      <p className="text-body-emphasis mb-3">{sponsors.description}</p>
      <Link className="btn btn-outline-primary btn-sm" to={sponsors.ctaHref}>
        {sponsors.ctaLabel}
      </Link>
    </div>
  );
}

export default HomeSponsorsView;
