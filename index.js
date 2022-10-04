const express = require("express");
const app = express();
var cors = require("cors");

const port = process.env.PORT || 3000;

const categorias = require("./categorias.json");
const resumo = require("./resumo.json");

app.get("/categorias", (req, res) => {
  return res.json(categorias);
});
app.get("/resumo", (req, res) => {
  return res.json(resumo);
});

app.listen(port, () => {
  console.log("listeners listening on port " + port);
});
