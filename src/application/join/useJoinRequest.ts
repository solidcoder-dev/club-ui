import { useMemo, useState, type FormEvent } from "react";
import type { JoinRequestValues } from "./joinRequestPresenter";
import { normalizeIban } from "../../domain/join/iban";
import {
  syncHolderFromPlayer,
  validateJoinRequest
} from "../../domain/join/joinRequest";
import type { JoinRequestHandlers } from "./joinRequestPresenter";

const initialValues: JoinRequestValues = {
  nombre: "",
  apellidos: "",
  telefono: "",
  email: "",
  dni: "",
  nacimiento: "",
  direccion: "",
  codigoPostal: "",
  localizacion: "",
  importe: "",
  titularMismoQueJugador: true,
  titularNombre: "",
  titularEmail: "",
  titularDireccion: "",
  titularCodigoPostal: "",
  titularLocalizacion: "",
  iban: "",
  acceptSepaMandate: false,
  justificante: null,
  acceptPrivacy: false
};

type UseJoinFormConfig = {
  onSubmitRequest: (values: JoinRequestValues) => void;
};

export const useJoinRequest = ({ onSubmitRequest }: UseJoinFormConfig) => {
  const [values, setValues] = useState<JoinRequestValues>(initialValues);

  const errors = useMemo(() => validateJoinRequest(values), [values]);
  const submitDisabled = Object.values(errors).some(Boolean);

  const handleChange = (field: keyof JoinRequestValues, value: string) => {
    setValues((prev) => {
      const next = {
        ...prev,
        [field]: field === "iban" ? normalizeIban(value) : value
      } as JoinRequestValues;
      return syncHolderFromPlayer(next);
    });
  };

  const handleFileChange = (file: File | null) => {
    setValues((prev) => ({ ...prev, justificante: file }));
  };

  const handleToggleChange = (
    field: keyof JoinRequestValues,
    checked: boolean
  ) => {
    setValues((prev) => {
      const next = { ...prev, [field]: checked } as JoinRequestValues;
      return syncHolderFromPlayer(next);
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(errors).some(Boolean)) return;
    onSubmitRequest(values);
  };

  const handlers: JoinRequestHandlers = {
    values,
    onChange: handleChange,
    onFileChange: handleFileChange,
    onToggleChange: handleToggleChange,
    errors,
    submitDisabled,
    onSubmit: handleSubmit
  };

  return handlers;
};
