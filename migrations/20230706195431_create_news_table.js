/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("news", (table) => {
    table.increments("id").primary();
    table.string("post_title", 255).notNullable();
    table.string('post_subtitle', 255);
    table.string("post_category", 36);
    table.timestamps(true, true);
    table.timestamp('published_at');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("news");
};



