import Koa from "koa";
import knex from "knex";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import helmet from "koa-helmet";
import { ApolloServer, gql } from "apollo-server-koa";
import { Model } from "objection";
import { config } from "./config";
import schema from "./schema";
import * as models from "./models";

const port = 3000;

const server = new ApolloServer({
  schema,
  context: () => ({
    models
  })
});

const app = new Koa();
Model.knex(knex(config.db));

app.use(logger());
app.use(bodyParser());
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false
  })
);

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${port}/graphql`
  );
});
