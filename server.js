const PORT = 3000;
// ===dependencies===
const pokemon = require("./models/pokemon");
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
app.put("/pokemon/:id", (req, res) => {
  req.body.stats.hp = req.body.stats[0];
  req.body.stats.attack = req.body.stats[1];
  req.body.stats.defense = req.body.stats[2];
  pokemon[req.params.id] = req.body;
  res.redirect("/pokemon/:id");
});
// ===create===
app.post("/pokemon/", (req, res) => {
  req.body.stats.hp = req.body.stats[0];
  req.body.stats.attack = req.body.stats[1];
  req.body.stats.defense = req.body.stats[2];
  pokemon.push(req.body);
  res.redirect("/pokemon");
});
// ===edit===
app.get("/pokemon/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    pokemon: pokemon[req.params.id],
    index: req.params.id,
    tabTitle: "| Edit",
  });
});
// ===show===
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.id],
    index: req.params.id,
    tabTitle: pokemon[req.params.id].name,
  });
});

app.listen(PORT, () => {
  console.log("Pokedex online...");
});
