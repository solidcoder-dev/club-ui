import type { JoinFeesDTO } from "../../domain/joinContent";

type JoinFeesViewProps = {
  fees: JoinFeesDTO;
};

function JoinFeesView({ fees }: JoinFeesViewProps) {
  return (
    <div className="mb-4 p-4 p-md-5 border rounded-4 bg-body shadow-sm">
      <span className="text-uppercase small text-body-secondary">
        Cuotas
      </span>
      <h3 className="h4 fw-semibold mt-2 mb-2">{fees.title}</h3>
      <p className="text-body-emphasis mb-4">{fees.subtitle}</p>
      <div className="d-grid gap-3">
        {fees.fees.map((fee) => (
          <div key={fee.label} className="p-3 p-md-4 border rounded-3 bg-body-tertiary">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
              <div>
                <h4 className="h6 fw-semibold mb-1">{fee.label}</h4>
                <p className="text-body-secondary mb-0 text-break">
                  {fee.description}
                </p>
              </div>
              <div className="text-end">
                <div className="d-flex flex-wrap align-items-baseline gap-2 justify-content-end">
                  <span className="h3 fw-bold text-body-emphasis mb-0">
                    {fee.price}
                  </span>
                  <span className="text-body-secondary">{fee.cadence}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinFeesView;
