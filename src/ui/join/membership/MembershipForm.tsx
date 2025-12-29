import type { JoinRequestHandlers } from "../../../application/join/joinRequestPresenter";
import MembershipFormView from "./MembershipFormView";

type MembershipFormProps = Pick<
  JoinRequestHandlers,
  "values" | "errors" | "onChange" | "onFileChange"
>;

function MembershipForm({
  values,
  errors,
  onChange,
  onFileChange
}: MembershipFormProps) {
  return (
    <MembershipFormView
      values={values}
      errors={errors}
      onChange={onChange}
      onFileChange={onFileChange}
    />
  );
}

export default MembershipForm;
