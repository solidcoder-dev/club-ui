import type { JoinRequestHandlers } from "../../../application/join/joinRequestPresenter";
import SepaPaymentFormView from "./SepaPaymentFormView";

type SepaPaymentFormProps = Pick<
  JoinRequestHandlers,
  "values" | "errors" | "onChange" | "onToggleChange"
>;

function SepaPaymentForm({
  values,
  errors,
  onChange,
  onToggleChange
}: SepaPaymentFormProps) {
  const showHolderFields = !values.titularMismoQueJugador;

  return (
    <SepaPaymentFormView
      values={values}
      errors={errors}
      showHolderFields={showHolderFields}
      onChange={onChange}
      onToggleChange={onToggleChange}
    />
  );
}

export default SepaPaymentForm;
