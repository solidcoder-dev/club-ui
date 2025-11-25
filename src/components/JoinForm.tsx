import { useState, type FormEvent } from "react";
import JoinFormView, { type JoinFormValues } from "./JoinFormView";

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
  justificante: null,
  acceptPrivacy: false
};

function JoinForm() {
  const [values, setValues] = useState<JoinFormValues>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof JoinFormValues, string>>
  >({});

  const handleChange = (field: keyof JoinFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleFileChange = (file: File | null) => {
    setValues((prev) => ({ ...prev, justificante: file }));
    setErrors((prev) => ({ ...prev, justificante: undefined }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setValues((prev) => ({ ...prev, acceptPrivacy: checked }));
    setErrors((prev) => ({ ...prev, acceptPrivacy: undefined }));
  };

  const validate = (form: JoinFormValues) => {
    const nextErrors: Partial<Record<keyof JoinFormValues, string>> = {};
    const emailPattern = /\S+@\S+\.\S+/;
    const phoneDigits = form.telefono.replace(/\D/g, "");

    if (!form.nombre.trim()) nextErrors.nombre = "El nombre es obligatorio.";
    if (!form.apellidos.trim())
      nextErrors.apellidos = "Los apellidos son obligatorios.";
    if (phoneDigits.length < 7)
      nextErrors.telefono = "Introduce un teléfono válido.";
    if (!emailPattern.test(form.email))
      nextErrors.email = "Introduce un email válido.";
    if (!form.dni.trim()) nextErrors.dni = "El DNI es obligatorio.";
    if (!form.nacimiento) nextErrors.nacimiento = "La fecha es obligatoria.";
    if (!form.importe) nextErrors.importe = "Selecciona un importe.";
    if (form.importe === "10" && !form.justificante) {
      nextErrors.justificante =
        "Adjunta el justificante si eres estudiante.";
    }
    if (!form.acceptPrivacy) {
      nextErrors.acceptPrivacy =
        "Debes aceptar la política de privacidad y el aviso legal.";
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    const hasErrors = Object.values(validationErrors).some(Boolean);
    if (hasErrors) return;

    // Aquí podrías llamar a un puerto/adaptador para enviar los datos.
    console.log("Solicitud de alta", values);
  };

  return (
    <JoinFormView
      values={values}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onCheckboxChange={handleCheckboxChange}
      errors={errors}
      onSubmit={handleSubmit}
    />
  );
}

export default JoinForm;
