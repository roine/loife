import { Model } from "objection";
import { RecipesModel } from "./Recipes";

export class GroceriesModel extends Model {
  id!: number;
  name!: string;
  recipes?: RecipesModel[];

  static tableName = "groceries";

  static jsonSchema = {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 255 }
    }
  };

  static relationMappings = () => ({
    recipes: {
      relation: Model.ManyToManyRelation,
      modelClass: RecipesModel,
      join: {
        from: "grocery.id",
        through: {
          from: "recipes_groceries.grocery_id",
          to: "recipes_groceries.recipe_id"
        },
        to: "recipes.id"
      }
    }
  });
}
