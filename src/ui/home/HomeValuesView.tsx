import type { HomeValuesDTO } from "../../domain/home";

type HomeValuesViewProps = {
  values: HomeValuesDTO;
};

function HomeValuesView({ values }: HomeValuesViewProps) {
  return (
    <div className="h-100 p-4 p-md-5 border rounded-4 bg-body shadow-sm">
      <span className="text-uppercase small text-body-secondary">
        Valores
      </span>
      <h2 className="h5 fw-semibold mt-2 mb-3">{values.title}</h2>
      <div className="d-grid gap-2">
        {values.points.map((point) => (
          <div key={point} className="d-flex gap-2 align-items-start">
            <span className="badge rounded-pill bg-primary-subtle text-primary-emphasis">
              ✓
            </span>
            <span className="text-body-emphasis">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeValuesView;
