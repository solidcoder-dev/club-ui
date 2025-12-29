import type { JoinFormHandlers } from "../../../application/join/joinFormHandlers";
import MembershipFormView from "./MembershipFormView";

type MembershipFormProps = Pick<
  JoinFormHandlers,
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
