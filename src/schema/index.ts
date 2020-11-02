import { makeExecutableSchema } from "graphql-tools";
import { gql } from "apollo-server-koa";
import {
  typeDef as RecipesTypeDef,
  resolvers as RecipesResolvers
} from "./Recipes";
import {
  typeDef as GroceriesTypeDef,
  resolvers as GroceriesResolvers
} from "./Groceries";

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    null: Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [typeDefs, RecipesTypeDef, GroceriesTypeDef],
  resolvers: [RecipesResolvers, GroceriesResolvers]
});
