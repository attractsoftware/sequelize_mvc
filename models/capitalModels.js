module.exports = (sequelize, DataTypes) => {
  const Capital = sequelize.define(
    "capital",
    {
      capital: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Capital;
};
