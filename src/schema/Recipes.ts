import { gql } from "apollo-server-koa";
import { RecipesModel } from "../models/Recipes";

export const typeDef = gql`
  type Recipe {
    id: ID
    title: String
    instructions: String
    ingredients: [Grocery]
  }

  extend type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
  }
`;

export const resolvers = {
  Query: {
    recipes(root: any, args: any, { models }: any) {
      return models.RecipesModel.query();
    },

    recipe(root: any, { id }: any, { models }: any) {
      return models.RecipesModel.query().findById(id);
    }
  },
  Recipe: {
    ingredients: (recipe: RecipesModel) => {
      return recipe.$relatedQuery("ingredients");
    }
  }
};
