export type JoinIntroDTO = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
};

export type JoinFeeDTO = {
  label: string;
  price: string;
  cadence: string;
  description: string;
};

export type JoinFeesDTO = {
  title: string;
  subtitle: string;
  fees: JoinFeeDTO[];
};

export type JoinPaymentProcessDTO = {
  title: string;
  steps: string[];
};

export type JoinBankInfoDTO = {
  title: string;
  description: string;
  iban: string;
  cadence: string;
  holder?: string;
  footnote: string;
};
