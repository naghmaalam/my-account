// This is for the Login page section

export type Section = "EmailPassword" | "EmailCode" | "EnterCode";
export type UpdateSection = (a: Section) => void;
