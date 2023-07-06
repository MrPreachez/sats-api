/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("images", (table) => {
    table.increments("id").primary();
    table
      .integer("news_id")
      .unsigned()
      .references("news.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.binary("image");
    table.string("image_name");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("images");
};
