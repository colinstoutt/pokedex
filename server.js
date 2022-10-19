const PORT = 3000;
const pokemon = require("./models/pokemon");
// dependencies
const express = require("express");
const app = express();
const methodOverride = require("method-override");

// middleware and static files
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// index
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    pokemon: pokemon,
    tabTitle: "Master Branch",
  });
});

// show

// new

// edit

//create

// update

// delete

app.listen(PORT, () => {
  console.log("Pokedex online...");
});
