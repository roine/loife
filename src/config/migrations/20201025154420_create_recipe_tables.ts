import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("recipes", table => {
      table.increments("id").primary();
      table.string("title", 255).notNullable();
      table.string("instructions", 255).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("grocery_types", table => {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
    })
    .createTable("groceries", table => {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.integer("type_id").references("grocery_types.id");
    })
    .createTable("recipes_groceries", table => {
      table
        .integer("recipe_id")
        .unsigned()
        .references("recipes.id");
      table
        .integer("grocery_id")
        .unsigned()
        .references("groceries.id");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable("recipes_groceries")
    .dropTable("groceries")
    .dropTable("recipes")
    .dropTable("grocery_types");
}
