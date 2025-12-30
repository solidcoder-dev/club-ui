import type { FormEvent } from "react";
import type {
  JoinFormErrors as DomainJoinFormErrors,
  JoinFormValues as DomainJoinFormValues
} from "../../domain/join/joinRequestTypes";

export type JoinRequestValues = DomainJoinFormValues;
export type JoinRequestErrors = DomainJoinFormErrors;

export type JoinRequestHandlers = {
  values: JoinRequestValues;
  onChange: (field: keyof JoinRequestValues, value: string) => void;
  onFileChange: (file: File | null) => void;
  onToggleChange: (field: keyof JoinRequestValues, checked: boolean) => void;
  errors: JoinRequestErrors;
  submitDisabled: boolean;
  isSubmitting: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};
