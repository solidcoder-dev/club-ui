type ClubWelcomeProps = {
  tenant: string;
};

function ClubWelcome({ tenant }: ClubWelcomeProps) {
  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <p className="text-uppercase text-muted fw-semibold mb-0 small">
            Club
          </p>
          <span className="badge bg-primary text-uppercase">{tenant}</span>
        </div>
        <h1 className="card-title h3 fw-bold mb-3">Bienvenido al club</h1>
        <p className="card-text text-secondary mb-0">
          Este es el punto de partida. Usa este componente para extender la
          experiencia de tu club con más secciones y acciones.
        </p>
      </div>
    </section>
  );
}

export default ClubWelcome;
