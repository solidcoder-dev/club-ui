import type { JoinFormHandlers } from "./join-form.types";
import SubmitFormView from "./SubmitFormView";

type SubmitFormProps = Pick<JoinFormHandlers, "submitDisabled">;

function SubmitForm({ submitDisabled }: SubmitFormProps) {
  return <SubmitFormView submitDisabled={submitDisabled} />;
}

export default SubmitForm;
