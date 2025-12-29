import type { JoinRequestHandlers } from "../../../application/join/joinRequestPresenter";
import PlayerInfoFormView from "./PlayerInfoFormView";

type PlayerInfoFormProps = Pick<
  JoinRequestHandlers,
  "values" | "errors" | "onChange"
>;

function PlayerInfoForm({ values, errors, onChange }: PlayerInfoFormProps) {
  return (
    <PlayerInfoFormView values={values} errors={errors} onChange={onChange} />
  );
}

export default PlayerInfoForm;
