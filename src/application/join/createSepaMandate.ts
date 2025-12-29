import type { Club } from "../../domain/club";
import type { SepaMandate } from "../../domain/sepa/mandate";
import type { SepaMandatePort } from "../../ports/sepa-mandate-port";
import type { JoinFormValues } from "../../domain/join/joinRequestTypes";

type CreateSepaMandateParams = {
  values: JoinFormValues;
  club: Club;
  sepaMandatePort: SepaMandatePort;
};

export const createSepaMandate = ({
  values,
  club,
  sepaMandatePort
}: CreateSepaMandateParams): SepaMandate => {
  const debtorAddressParts = [
    values.titularDireccion,
    [values.titularCodigoPostal, values.titularLocalizacion]
      .filter(Boolean)
      .join(" ")
  ].filter(Boolean);

  return sepaMandatePort.createMandate({
    clubName: club.name,
    clubAddress: club.address,
    debtorName: values.titularNombre,
    debtorEmail: values.titularEmail,
    debtorIban: values.iban,
    debtorAddress: debtorAddressParts.join(", "),
    amount: Number.parseFloat(values.importe || "0"),
    currency: "EUR",
    consent: values.acceptSepaMandate
  });
};
