import JoinForm from "./join/JoinForm";
import type { Club } from "../domain/club";
import type { SepaMandatePort } from "../ports/sepa-mandate-port";
import { createSepaMandate } from "../application/join/createSepaMandate";
import type { JoinFormValues } from "../domain/join/joinRequestTypes";

type JoinSectionProps = {
  club: Club | null;
  sepaMandatePort: SepaMandatePort;
};

function JoinSection({ club, sepaMandatePort }: JoinSectionProps) {
  const handleSubmitValid = (values: JoinFormValues) => {
    if (!club) return;
    const mandate = createSepaMandate({ values, club, sepaMandatePort });
    console.log("Mandato SEPA generado", mandate);
  };

  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <h1 className="card-title h4 fw-bold mb-3">Únete</h1>
        <p className="text-secondary mb-4">
          Completa el formulario para iniciar el alta. Nos pondremos en contacto
          contigo para confirmar los próximos pasos.
        </p>
        <JoinForm onSubmitValid={handleSubmitValid} />
      </div>
    </section>
  );
}

export default JoinSection;
