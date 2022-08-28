import { Maybe } from "./types";

export const classNames = (...tokens: Maybe<string>[]) => {
  return tokens.filter(Boolean).join(" ");
};
