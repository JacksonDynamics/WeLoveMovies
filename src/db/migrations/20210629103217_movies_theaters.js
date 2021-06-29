
exports.up = function (knex) {
    return knex.schema.createTable("movies_theaters", (table) => {
      table.foreign("movie_id");   // A reference ID to a particular movie.
      table.foreign("theater_id");  // A reference ID to a particular theater.
      table.boolean("is_showing");  // A representation of whether or not the movie is currently showing in the referenced theater.
      table.timestamps(true, true);
    });
  };

  exports.down = function (knex) {
    return knex.schema.dropTable("movies_theaters");
  };

