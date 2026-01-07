import { Link } from "react-router-dom";
import federacionLogo from "../assets/partners/federacion-canaria-de-rugby-logo.png";
import ulpgcLogo from "../assets/partners/ulpgc-servicio-deportes-logo.png";

function Footer() {
  return (
    <footer className="bg-primary py-4 mt-auto border-top border-primary-subtle">
      <div className="container text-white">
        <div className="row gy-3 align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <span className="text-white-50 small">
              © {new Date().getFullYear()} Club de Rugby Maspalomas
            </span>
          </div>
          <div className="col-md-4 d-flex justify-content-center gap-3">
            <Link className="text-white-50 small text-decoration-none" to="/privacidad">
              Política de privacidad
            </Link>
            <Link className="text-white-50 small text-decoration-none" to="/aviso-legal">
              Aviso legal
            </Link>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center gap-2">
          <a
            href="https://canariasrugby.com/"
            target="_blank"
            rel="noreferrer"
            className="d-inline-flex footer-partner"
            aria-label="Federación Canaria de Rugby"
          >
            <img
              src={federacionLogo}
              alt="Federación Canaria de Rugby"
              height={48}
              className="bg-white rounded-2 p-1"
            />
          </a>
          <a
            href="https://deportes.ulpgc.es/"
            target="_blank"
            rel="noreferrer"
            className="d-inline-flex footer-partner"
            aria-label="ULPGC Servicio de Deportes"
          >
            <img
              src={ulpgcLogo}
              alt="ULPGC Servicio de Deportes"
              height={48}
              className="bg-white rounded-2 p-1"
            />
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
