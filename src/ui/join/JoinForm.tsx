import { useJoinForm } from "../../application/join/useJoinForm";
import type { JoinFormValues } from "../../domain/join/joinRequestTypes";
import MembershipForm from "./membership/MembershipForm";
import PlayerInfoForm from "./player-info/PlayerInfoForm";
import PrivacyForm from "./privacy/PrivacyForm";
import SepaPaymentForm from "./sepa/SepaPaymentForm";
import SubmitForm from "./submit/SubmitForm";

type JoinFormProps = {
  onSubmitValid: (values: JoinFormValues) => void;
};

function JoinForm({ onSubmitValid }: JoinFormProps) {
  const handlers = useJoinForm({ onSubmitValid });
  const { submitDisabled } = handlers;

  return (
    <form className="row g-3" onSubmit={handlers.onSubmit}>
      <PlayerInfoForm {...handlers} />
      <MembershipForm {...handlers} />
      <SepaPaymentForm {...handlers} />
      <PrivacyForm {...handlers} />
      <SubmitForm submitDisabled={submitDisabled} />
    </form>
  );
}

export default JoinForm;
