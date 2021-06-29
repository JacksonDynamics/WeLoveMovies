
exports.up = function (knex) {
    return knex.schema.createTable("reviews", (table) => {
      table.increments("review_id").primary();   // A unique ID for the review.
      table.text("content");  // The content of the review, written in markdown.
      table.integer("score");  // A numerical representation of the score given to the movie by the critic.
      table.foreign("critic_id");  // A reference ID to a particular critic.
      table.foreign("movie_id");  // A reference ID to a particular movie.
      table.timestamps(true, true);
    });
  };

  exports.down = function (knex) {
    return knex.schema.dropTable("reviews");
  };

