/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("members", (table) => {
    table.uuid("id").primary();
    table.string("member_name").notNullable();
    table.string("address");
    table.string("city");
    table.string("country");
    table.string("postal_code");
    table.string("contact_phone").notNullable();
    table.string("contact_email").notNullable();
    table.string("member_status").notNullable();
    table.string("password").notNullable();
    table.string("reset_password_token");
    table.dateTime("reset_password_expires");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("members");
};
