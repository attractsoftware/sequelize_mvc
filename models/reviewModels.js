module.exports = (sequelize, Datatyps) => {
  const Review = sequelize.define("review", {
    rating: {
      type: Datatyps.INTEGER,
    },
    description: {
      type: Datatyps.TEXT,
    },
  });
  return Review;
};
