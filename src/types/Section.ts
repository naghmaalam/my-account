// This is for the Login page section

export type Section =
  | "EmailPassword"
  | "EmailCode"
  | "EnterCode"
  | "PasswordRecovery"
  | "PasswordRecoveryEnterCode"
  | "PasswordRecoveryEnterNewPassword";
export type UpdateSection = (a: Section) => void;
