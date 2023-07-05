/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("images", (table) => {
        table.uuid("id").primary();
        table.uuid("news_id").references("id").inTable("news").onDelete("CASCADE");
        table.binary("image");
        table.string("image_name");
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
  
};
