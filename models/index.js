const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    min: dbConfig.pool.min,
    max: dbConfig.pool.max,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel")(sequelize, DataTypes);

db.reviews = require("./reviewModels")(sequelize, DataTypes);
db.country = require("./countryModels")(sequelize, DataTypes);
db.capital = require("./capitalModels")(sequelize, DataTypes);
// db.country.hasOne(db.capital, { foreignKey: "country_id" });
db.country.hasOne(db.capital);
db.sequelize
  .sync({ alter: true })
  .then((data) => {
    console.log("sysn done");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports.db = db;
