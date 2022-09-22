module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "country",
    {
      contryName: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return Country;
};
