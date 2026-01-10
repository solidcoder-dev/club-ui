import type {
  JoinBankInfoDTO,
  JoinFeesDTO,
  JoinIntroDTO,
  JoinPaymentProcessDTO
} from "../domain/joinContent";

export type JoinContentPort = {
  getIntro: () => Promise<JoinIntroDTO>;
  getFees: () => Promise<JoinFeesDTO>;
  getPaymentProcess: () => Promise<JoinPaymentProcessDTO>;
  getBankInfo: () => Promise<JoinBankInfoDTO>;
};
