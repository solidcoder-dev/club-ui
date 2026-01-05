import type {
  AulaApproachDTO,
  AulaIntroDTO,
  AulaPartnershipDTO,
  AulaTrainingDTO
} from "../domain/aula";

export type AulaContentPort = {
  getIntro: () => Promise<AulaIntroDTO>;
  getTraining: () => Promise<AulaTrainingDTO>;
  getApproach: () => Promise<AulaApproachDTO>;
  getPartnership: () => Promise<AulaPartnershipDTO>;
};
