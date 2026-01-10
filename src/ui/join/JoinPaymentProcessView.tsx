import type { JoinPaymentProcessDTO } from "../../domain/joinContent";

type JoinPaymentProcessViewProps = {
  paymentProcess: JoinPaymentProcessDTO;
};

const emphasizeMensual = (step: string) => {
  const match = step.match(/mensual/i);
  if (!match || match.index === undefined) return step;
  const start = match.index;
  const end = start + match[0].length;
  return (
    <>
      {step.slice(0, start)}
      <strong>{step.slice(start, end)}</strong>
      {step.slice(end)}
    </>
  );
};

function JoinPaymentProcessView({ paymentProcess }: JoinPaymentProcessViewProps) {
  return (
    <div className="mb-4 p-4 p-md-5 border rounded-4 bg-body shadow-sm">
      <span className="text-uppercase small text-body-secondary">
        Proceso
      </span>
      <h3 className="h5 fw-semibold mt-2 mb-3">{paymentProcess.title}</h3>
      <ol className="list-unstyled mb-0 d-grid gap-2">
        {paymentProcess.steps.map((step, index) => (
          <li key={step} className="d-flex gap-2 align-items-start">
            <span className="badge rounded-pill bg-primary-subtle text-primary-emphasis">
              {index + 1}
            </span>
            <span className="text-body-emphasis">{emphasizeMensual(step)}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default JoinPaymentProcessView;
