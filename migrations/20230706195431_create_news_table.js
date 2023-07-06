/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("news", (table) => {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.text("article").notNullable();
    table.integer("image_count").unsigned().defaultTo(0);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("news");
};
