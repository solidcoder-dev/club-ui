import type { SepaMandate } from "../domain/sepa/mandate";

export interface MandatePdfPort {
  toDataUrl(mandate: SepaMandate): string;
}
