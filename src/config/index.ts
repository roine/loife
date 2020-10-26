import knexfile from "./knexfile";

const NODE_ENV = (process.env.NODE_ENV ?? "development") as
  | "development"
  | "staging"
  | "production";

export const config = {
  db: knexfile[NODE_ENV]
};
