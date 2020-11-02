import { gql } from "apollo-server-koa";

export const typeDef = gql`
  type Grocery {
    id: ID
    name: String
  }

  extend type Query {
    groceries: [Grocery]
  }
`;

export const resolvers = {
  Query: {
    groceries: (root: any, args: any, { models }: any) => {
      return models.GroceriesModel.query();
    }
  }
};
