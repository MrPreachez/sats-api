/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("articles", (table) => {
        table.uuid("id").primary();
        table.text("article").notNullable();
        table
        .integer("post_id").unsigned()
        .references("news.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("articles");
};
