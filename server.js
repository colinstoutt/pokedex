const PORT = 3000;
// ===dependencies===
const pokemon = require("./models/pokemon");
const types = require("./models/types");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
// ===middleware and static files===
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// ===INDUCES===
// ===index===
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    pokemon: pokemon,
    tabTitle: "Master Branch",
  });
});
// ===new===
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs", {
    tabTitle: "New",
  });
});
// ===delete===
app.delete("/pokemon/:id", (req, res) => {
  console.log("DELETE success...");
  pokemon.splice(req.params.id, 1);
  res.redirect("/pokemon");
});
// ===update===
// ===create===
// CREATE route
app.post("/pokemon/", (req, res) => {
  console.log(req.body);
  pokemon.push(req.body);
  res.redirect("/pokemon");
});
// ===edit===
// ===show===
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.id],
    index: req.params.id,
    type: types,
    tabTitle: pokemon[req.params.id].name,
  });
});

app.listen(PORT, () => {
  console.log("Pokedex online...");
});
