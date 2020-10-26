import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("recipes_groceries").del();
  await knex("recipes").del();
  await knex("groceries").del();

  // Inserts seed entries
  await knex("recipes").insert([
    {
      title: "hello world",
      instructions: "These are the instructions"
    }
  ]);

  await knex("groceries").insert([
    {
      name: "Potatoes"
    },
    { name: "Tomatoes" }
  ]);

  const recipeIds = await knex("recipes").pluck("id");
  const groceryIds = await knex("groceries").pluck("id");

  await knex("recipes_groceries").insert(
    groceryIds.map(groceryId => ({
      recipe_id: recipeIds[0],
      grocery_id: groceryId
    }))
  );
}
