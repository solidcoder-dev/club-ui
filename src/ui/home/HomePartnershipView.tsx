import { Link } from "react-router-dom";
import type { HomePartnershipDTO } from "../../domain/home";

type HomePartnershipViewProps = {
  partnership: HomePartnershipDTO;
};

function HomePartnershipView({ partnership }: HomePartnershipViewProps) {
  return (
    <div className="mb-4 p-4 p-md-5 border rounded-4 bg-body shadow-sm">
      <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
        <span className="text-uppercase small text-body-secondary">
          Partnership
        </span>
        <span className="badge bg-primary-subtle text-primary-emphasis">
          ULPGC
        </span>
      </div>
      <h2 className="h5 fw-semibold mb-2">{partnership.title}</h2>
      <p className="text-body-emphasis mb-3">{partnership.description}</p>
      <Link className="btn btn-outline-primary btn-sm" to={partnership.linkHref}>
        {partnership.linkLabel}
      </Link>
    </div>
  );
}

export default HomePartnershipView;
