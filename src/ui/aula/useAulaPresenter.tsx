import { useEffect, useState } from "react";
import type {
  AulaApproachDTO,
  AulaIntroDTO,
  AulaPartnershipDTO,
  AulaTrainingDTO
} from "../../domain/aula";
import type { AulaContentPort } from "../../ports/aula-content-port";

type UseAulaPresenterConfig = {
  aulaContentPort: AulaContentPort;
};

export const useAulaPresenter = ({ aulaContentPort }: UseAulaPresenterConfig) => {
  const [intro, setIntro] = useState<AulaIntroDTO | null>(null);
  const [training, setTraining] = useState<AulaTrainingDTO | null>(null);
  const [approach, setApproach] = useState<AulaApproachDTO | null>(null);
  const [partnership, setPartnership] = useState<AulaPartnershipDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setError(null);
    setIsLoading(true);

    Promise.all([
      aulaContentPort.getIntro(),
      aulaContentPort.getTraining(),
      aulaContentPort.getApproach(),
      aulaContentPort.getPartnership()
    ])
      .then(([nextIntro, nextTraining, nextApproach, nextPartnership]) => {
        if (!active) return;
        setIntro(nextIntro);
        setTraining(nextTraining);
        setApproach(nextApproach);
        setPartnership(nextPartnership);
      })
      .catch(() => {
        if (active) setError("No pudimos cargar la información del Aula.");
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [aulaContentPort]);

  return { intro, training, approach, partnership, error, isLoading };
};
