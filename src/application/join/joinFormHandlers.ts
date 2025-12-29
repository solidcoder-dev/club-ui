import type { FormEvent } from "react";
import type {
  JoinFormErrors as DomainJoinFormErrors,
  JoinFormValues as DomainJoinFormValues
} from "../../domain/join/joinRequestTypes";

export type JoinFormValues = DomainJoinFormValues;
export type JoinFormErrors = DomainJoinFormErrors;

export type JoinFormHandlers = {
  values: JoinFormValues;
  onChange: (field: keyof JoinFormValues, value: string) => void;
  onFileChange: (file: File | null) => void;
  onToggleChange: (field: keyof JoinFormValues, checked: boolean) => void;
  errors: JoinFormErrors;
  submitDisabled: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};
