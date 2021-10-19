// This is for the Login page section

export type Section =
  | "EmailPassword"
  | "EmailCode"
  | "EnterCode"
  | "PasswordRecovery"
  | "PasswordRecoveryEnterCode"
  | "PasswordRecoveryEnterNewPassword";

export type SectionReferral = "ShareInvitation" | "Rewards";

// export type UpdateSection = <T>(section: T) => void;
export type UpdateSection = <T>(section: T) => void;
