import type { SepaMandate, SepaMandateInput } from "../domain/sepa/mandate";

export interface SepaMandatePort {
  createMandate(input: SepaMandateInput): SepaMandate;
}
