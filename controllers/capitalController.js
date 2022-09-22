const { db } = require("../models/index");
const Capital = db.capital;
const Country = db.country;

const addCapital = async (req, res) => {
  const capitalName = req.body.capitalName;
  console.log(req.body);
  let result = await Capital.create({ capital: capitalName });
  res.status(200).send(result);
};

const assignCountry = async (req, res) => {
  const country_id = req.body.countryId;
  const capital_id = req.body.capitalId;
  let country = await Country.findOne({ where: { id: country_id } });
  let capital = await Capital.findOne({ where: { id: capital_id } });
  let result = await country.setCapital(capital);
  res.status(200).send(result);
};

module.exports = {
  addCapital,
  assignCountry,
};
