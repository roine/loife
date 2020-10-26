import Recipe from "../models/Recipe";

export const recipesController = {
  async getAll(ctx: any, next: Function) {
    // const rows = await ctx.db("recipes");
    const withIngredients = await Recipe.query().withGraphFetched(
      "ingredients"
    );
    ctx.body = withIngredients;
  }
};
