import { Model } from "objection";
import Recipe from "./Recipe";

export default class Grocery extends Model {
  id!: number;
  name!: string;
  recipes?: Recipe[];

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
      modelClass: Recipe,
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
