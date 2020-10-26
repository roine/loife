import Koa from "koa";
import knex from "knex";
import Router from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import helmet from "koa-helmet";
import { router } from "./routes";
import { db } from "./middlewares/db-middleware";
import { config } from "./config";
import { Model, ForeignKeyViolationError, ValidationError } from "objection";
const port = 3000;

const app = new Koa();

Model.knex(knex(config.db));

app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(helmet());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server started at g http://localhost:${port}`);
});
