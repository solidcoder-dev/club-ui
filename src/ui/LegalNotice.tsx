type LegalNoticeProps = {
  clubEmail: string;
};

function LegalNotice({ clubEmail }: LegalNoticeProps) {
  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <h1 className="card-title h4 fw-bold mb-3">Aviso legal</h1>
        <p className="text-secondary mb-2">
          Este sitio es gestionado por el club. El contenido y las actividades
          descritas están sujetos a la normativa vigente y a los estatutos del
          club.
        </p>
        <p className="text-secondary mb-2">
          El uso del sitio implica la aceptación de estas condiciones. Si tienes
          dudas, contáctanos en {clubEmail}.
        </p>
        <p className="text-secondary mb-0">
          La propiedad intelectual de los materiales pertenece a sus
          respectivos autores y no puede reproducirse sin permiso.
        </p>
      </div>
    </section>
  );
}

export default LegalNotice;
