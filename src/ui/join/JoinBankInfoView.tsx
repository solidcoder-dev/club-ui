import { useState } from "react";
import type { JoinBankInfoDTO } from "../../domain/joinContent";

type JoinBankInfoViewProps = {
  bankInfo: JoinBankInfoDTO;
  clubName?: string;
};

function JoinBankInfoView({ bankInfo, clubName }: JoinBankInfoViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bankInfo.iban);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="p-4 p-md-5 border rounded-4 bg-primary-subtle">
      <span className="text-uppercase small text-body-secondary">
        Datos bancarios
      </span>
      <h3 className="h5 fw-semibold mt-2 mb-3">{bankInfo.title}</h3>
      <p className="text-body-emphasis mb-4">{bankInfo.description}</p>
      <div className="p-3 p-md-4 bg-body border rounded-3">
        <div className="d-flex flex-column gap-1">
          {(clubName || bankInfo.holder) && (
            <span className="small text-body-secondary">
              Titular: {clubName || bankInfo.holder}
            </span>
          )}
          <span className="small text-body-secondary">IBAN</span>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="h5 fw-semibold font-monospace mb-0">
              {bankInfo.iban}
            </span>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={handleCopy}
            >
              {copied ? "Copiado" : "Copiar IBAN"}
            </button>
          </div>
          <span className="small text-body-secondary">
            Periodicidad: {bankInfo.cadence}
          </span>
        </div>
      </div>
      <p className="small text-body-secondary mt-3 mb-0">
        {bankInfo.footnote}
      </p>
    </div>
  );
}

export default JoinBankInfoView;
