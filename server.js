const express = require("express");

const cors = require("cors");
const app = express();
var corOperation = {
  origin: "https//localhost:8081",
};

const routerProduct = require("./routs/productRouter");
const routerReview = require("./routs/reviewRouter");
const routerCountry = require("./routs/countryRouter");
const routerCapital = require("./routs/capitalRouter");

app.use(cors(corOperation));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", routerProduct);
app.use("/api/reviews", routerReview);
app.use("/api/country", routerCountry);
app.use("/api/capital", routerCapital);
// TEST API

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server run on port:", PORT);
});
