function ContactSection() {
  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <h1 className="card-title h4 fw-bold mb-3">Contacto</h1>
        <p className="text-secondary mb-3">
          Escríbenos para coordinar entrenamientos, colaboraciones o resolver
          dudas sobre el club.
        </p>
        <ul className="list-unstyled mb-0 text-secondary">
          <li className="mb-2">
            <strong>Email:</strong> contacto@club.com
          </li>
          <li className="mb-2">
            <strong>Teléfono:</strong> +34 600 000 000
          </li>
          <li>
            <strong>Dirección:</strong> Instalaciones principales, Calle Campo 1
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactSection;
