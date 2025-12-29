export type SepaMandateInput = {
  clubName: string;
  clubAddress: string;
  debtorName: string;
  debtorEmail: string;
  debtorIban: string;
  debtorAddress: string;
  amount: number;
  currency: string;
  consent: boolean;
};

export type SepaMandate = SepaMandateInput & {
  mandateReference: string;
  signedAt: string;
};
