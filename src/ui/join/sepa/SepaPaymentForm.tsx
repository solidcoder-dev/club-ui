import type {
  JoinFormHandlers,
  JoinFormValues
} from "../../../application/join/joinFormHandlers";
import { normalizeIban } from "../../../domain/join/iban";
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

  const handleChange = (field: keyof JoinFormValues, value: string) => {
    if (field === "iban") {
      onChange(field, normalizeIban(value));
      return;
    }
    onChange(field, value);
  };

  return (
    <SepaPaymentFormView
      values={values}
      errors={errors}
      showHolderFields={showHolderFields}
      onChange={handleChange}
      onToggleChange={onToggleChange}
    />
  );
}

export default SepaPaymentForm;
