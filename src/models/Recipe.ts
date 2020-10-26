import { Model } from "objection";
import Grocery from "./Grocery";

export default class Recipes extends Model {
  id!: number;
  title!: string;
  instructions!: string;
  ingredients!: Grocery[];

  static tableName = "recipes";

  static jsonSchema = {
    type: "object",
    required: ["title", "instructions"]
  };

  static relationMappings = () => ({
    ingredients: {
      relation: Model.ManyToManyRelation,
      modelClass: Grocery,
      join: {
        from: "recipes.id",
        through: {
          from: "recipes_groceries.recipe_id",
          to: "recipes_groceries.grocery_id"
        },
        to: "groceries.id"
      }
    }
  });
}
