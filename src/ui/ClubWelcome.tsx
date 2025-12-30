import type { Club } from "../domain/club";

type ClubWelcomeProps = {
  tenant: string;
  club: Club | null;
  error: string | null;
};

function ClubWelcome({ tenant, club, error }: ClubWelcomeProps) {
  const isLoading = !club && !error;

  return (
    <section>
      <div className="rounded-3 p-4 mb-4 bg-body-tertiary border">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <p className="text-uppercase fw-semibold mb-0 small">
            Club
          </p>
          <span className="badge bg-body-secondary text-body text-uppercase">
            {tenant}
          </span>
        </div>
        {isLoading && (
          <p className="card-text text-body-secondary mb-0">Cargando club...</p>
        )}
        {error && (
          <p className="card-text text-danger mb-0" role="alert">
            {error}
          </p>
        )}
        {club && !error && (
          <>
            <h1 className="card-title h3 fw-bold mb-2">{club.name}</h1>
            <p className="fw-semibold mb-3">{club.tagline}</p>
            <p className="mb-0">{club.description}</p>
          </>
        )}
        </div>
        {club && !error && club.training && (
          <div className="p-3 border rounded-3 bg-body-secondary">
            <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
              <h2 className="h6 mb-0">Entrenamientos</h2>
              <span className="badge bg-primary">
                {club.training.schedule}
              </span>
            </div>
            <div className="text-body-secondary mb-2">
              {club.training.location}
            </div>
            <a
              className="btn btn-outline-primary btn-sm"
              href={club.training.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver mapa
            </a>
          </div>
        )}
    </section>
  );
}

export default ClubWelcome;
