import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary py-3 mt-auto">
      <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 text-white">
        <span className="text-white-50 small">
          © {new Date().getFullYear()} Club
        </span>
        <div className="d-flex gap-3">
          <Link className="text-white-50 small text-decoration-none" to="/privacidad">
            Política de privacidad
          </Link>
          <Link className="text-white-50 small text-decoration-none" to="/aviso-legal">
            Aviso legal
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
