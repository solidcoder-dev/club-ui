import { Link } from "react-router-dom";
import type { HomeCtaDTO } from "../../domain/home";

type HomeCtaViewProps = {
  cta: HomeCtaDTO;
};

function HomeCtaView({ cta }: HomeCtaViewProps) {
  return (
    <div className="mt-4 p-4 p-md-5 border border-2 rounded-4 bg-primary-subtle shadow-sm">
      <div className="row g-4 align-items-center">
        <div className="col-12">
          <span className="text-uppercase small text-body-secondary">
            Comunidad
          </span>
          <h2 className="h3 fw-semibold mt-2 mb-3">{cta.title}</h2>
          <p className="text-body-emphasis mb-0">{cta.description}</p>
          <div className="mt-4 pt-3 border-top">
            <div className="p-3 bg-body rounded-3 border w-100 mx-auto" style={{ maxWidth: "720px" }}>
              <div className="d-grid d-lg-flex gap-2">
                <Link to={cta.primary.href} className="btn btn-primary btn-lg w-100 flex-fill d-flex align-items-center justify-content-center">
                  <i className="bi bi-person-plus me-2" aria-hidden="true" />
                  {cta.primary.label}
                </Link>
                <Link to={cta.secondary.href} className="btn btn-outline-primary w-100 flex-fill btn-sm d-flex align-items-center justify-content-center">
                  {cta.secondary.label}
                </Link>
                <Link to={cta.tertiary.href} className="btn btn-outline-primary w-100 flex-fill btn-sm d-flex align-items-center justify-content-center">
                  {cta.tertiary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCtaView;
