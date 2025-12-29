import type { Club } from "../../domain/club";
import type { JoinRequestValues } from "./joinRequestPresenter";
import type { SepaMandatePort } from "../../ports/sepa-mandate-port";
import type { JoinRequestStoragePort } from "../../ports/join-request-storage-port";
import { createSepaMandateUseCase } from "./createSepaMandateUseCase";

type SubmitJoinRequestParams = {
  values: JoinRequestValues;
  club: Club;
  sepaMandatePort: SepaMandatePort;
  storagePort: JoinRequestStoragePort;
};

export const submitJoinRequestUseCase = ({
  values,
  club,
  sepaMandatePort,
  storagePort
}: SubmitJoinRequestParams) => {
  const mandate = createSepaMandateUseCase({ values, club, sepaMandatePort });
  storagePort.save({
    player: values,
    mandate,
    savedAt: new Date().toISOString()
  });

  return mandate;
};
