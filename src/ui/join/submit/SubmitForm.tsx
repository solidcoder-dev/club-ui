import type { JoinRequestHandlers } from "../../../application/join/joinRequestPresenter";
import SubmitFormView from "./SubmitFormView";

type SubmitFormProps = Pick<JoinRequestHandlers, "submitDisabled">;

function SubmitForm({ submitDisabled }: SubmitFormProps) {
  return <SubmitFormView submitDisabled={submitDisabled} />;
}

export default SubmitForm;
