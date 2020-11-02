import { Model } from "objection";
import { GroceriesModel } from "./Groceries";

export class RecipesModel extends Model {
  id!: number;
  title!: string;
  instructions!: string;
  ingredients!: GroceriesModel[];

  static tableName = "recipes";

  static jsonSchema = {
    type: "object",
    required: ["title", "instructions"]
  };

  static relationMappings = () => ({
    ingredients: {
      relation: Model.ManyToManyRelation,
      modelClass: GroceriesModel,
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
