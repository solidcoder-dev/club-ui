import { useMemo, useState, type FormEvent } from "react";
import type { JoinFormValues } from "../../domain/join/joinRequestTypes";
import { normalizeIban } from "../../domain/join/iban";
import {
  syncHolderFromPlayer,
  validateJoinRequest
} from "../../domain/join/joinRequest";
import type { JoinFormHandlers } from "./joinFormHandlers";

const initialValues: JoinFormValues = {
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

export const useJoinForm = () => {
  const [values, setValues] = useState<JoinFormValues>(initialValues);

  const errors = useMemo(() => validateJoinRequest(values), [values]);
  const submitDisabled = Object.values(errors).some(Boolean);

  const handleChange = (field: keyof JoinFormValues, value: string) => {
    setValues((prev) => {
      const next = {
        ...prev,
        [field]: field === "iban" ? normalizeIban(value) : value
      } as JoinFormValues;
      return syncHolderFromPlayer(next);
    });
  };

  const handleFileChange = (file: File | null) => {
    setValues((prev) => ({ ...prev, justificante: file }));
  };

  const handleToggleChange = (field: keyof JoinFormValues, checked: boolean) => {
    setValues((prev) => {
      const next = { ...prev, [field]: checked } as JoinFormValues;
      return syncHolderFromPlayer(next);
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(errors).some(Boolean)) return;

    // Aquí podrías llamar a un puerto/adaptador para enviar los datos.
    console.log("Solicitud de alta", values);
  };

  const handlers: JoinFormHandlers = {
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
