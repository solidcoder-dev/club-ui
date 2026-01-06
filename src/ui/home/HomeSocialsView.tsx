import type { HomeSocialsDTO } from "../../domain/home";

type HomeSocialsViewProps = {
  socials: HomeSocialsDTO;
};

function HomeSocialsView({ socials }: HomeSocialsViewProps) {
  return (
    <div className="h-100 p-4 p-md-5 border rounded-4 bg-body shadow-sm">
      <span className="text-uppercase small text-body-secondary">
        Comunidad
      </span>
      <h2 className="h5 fw-semibold mt-2 mb-3">{socials.title}</h2>
      <div className="d-flex flex-wrap gap-2">
        {socials.links.map((link) => (
          <a
            key={link.href}
            className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <i
              className={`bi ${
                link.label.toLowerCase() === "facebook"
                  ? "bi-facebook"
                  : "bi-instagram"
              }`}
              aria-hidden="true"
            />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default HomeSocialsView;
