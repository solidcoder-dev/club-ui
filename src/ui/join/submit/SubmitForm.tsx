import type { JoinRequestHandlers } from "../../../application/join/joinRequestPresenter";
import SubmitFormView from "./SubmitFormView";

type SubmitFormProps = Pick<JoinRequestHandlers, "submitDisabled" | "isSubmitting">;

function SubmitForm({ submitDisabled, isSubmitting }: SubmitFormProps) {
  return (
    <SubmitFormView submitDisabled={submitDisabled} isSubmitting={isSubmitting} />
  );
}

export default SubmitForm;
