import type {
  JoinBankInfoDTO,
  JoinFeesDTO,
  JoinIntroDTO,
  JoinPaymentProcessDTO
} from "../domain/joinContent";
import type { JoinContentPort } from "../ports/join-content-port";

const joinFiles = import.meta.glob("../assets/join/*.json");

const loadJson = async <T,>(name: string): Promise<T> => {
  const path = `../assets/join/${name}.json`;
  const loader = joinFiles[path];
  if (!loader) {
    throw new Error(`No se encontró el endpoint de unete: ${name}`);
  }
  const module = (await loader()) as { default: unknown };
  return module.default as T;
};

export function createJsonJoinContentAdapter(): JoinContentPort {
  async function getIntro() {
    return loadJson<JoinIntroDTO>("intro");
  }

  async function getFees() {
    return loadJson<JoinFeesDTO>("fees");
  }

  async function getPaymentProcess() {
    return loadJson<JoinPaymentProcessDTO>("payment-process");
  }

  async function getBankInfo() {
    return loadJson<JoinBankInfoDTO>("bank");
  }

  return {
    getIntro,
    getFees,
    getPaymentProcess,
    getBankInfo
  };
}
