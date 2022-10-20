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
app.get("/pokemon/:id", (req, res) => {
  console.log(pokemon[req.params.id].stats);
  res.render("show.ejs", {
    pokemon: pokemon[req.params.id],
    tabTitle: pokemon[req.params.id].name,
  });
});

// new

// edit

//create

// update

// delete

app.listen(PORT, () => {
  console.log("Pokedex online...");
});
