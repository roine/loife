import knex from "knex";
import { config } from "../config";

export const db = (app: any) => {
  const db = knex(config.db);
  app.context.db = db;

  return async function(ctx: any, next: Function) {
    return next();
  };
};
