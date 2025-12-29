import type { JoinFormHandlers } from "../../../application/join/joinFormHandlers";
import SepaPaymentFormView from "./SepaPaymentFormView";

type SepaPaymentFormProps = Pick<
  JoinFormHandlers,
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
