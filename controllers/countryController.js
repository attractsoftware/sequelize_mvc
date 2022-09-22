const { db } = require("../models/index");

const Country = db.country;

module.exports.addCountry = async (req, res) => {
  let country = req.body.country;
  let result = await Country.create({ contryName: country });
  res.status(200).send(result);
};

module.exports.getCountry = async (req, res) => {
  console.log("trigger get Country");
  let country = req.params.id;
  console.log(req.params);
  let result = await Country.findOne({ where: { id: country } });
  let resultCounry = await result.getCapital();
  res.status(200).send(resultCounry);
};

module.exports.createCountyAndCapital = async (req, res) => {
  const countryName = req.body.countryName;
  const capital = req.body.capitalName;
  console.log(countryName, capital);
  let country = await Country.create({ contryName: countryName });
  let capitalres = await country.createCapital({ capital: capital });
  res.status(200).send({ country, capitalres });
};
