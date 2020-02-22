const express = require("express");
const app = express();
const hbs = require('hbs');
const {getAnio,capitalizar} = require('./hbs/helpers');

//variables de entorno
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

//Express using hbs
hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");

//helpers
getAnio();
capitalizar();

app.get("/", function(req, res) {
  res.render("home", {
    nombre: "renzo gómez",
    anio: new Date().getFullYear()
  });
});
app.get("/about", function(req, res) {
  res.render("about", {
    anio: new Date().getFullYear()
  });
});

app.listen(port, () => {
  console.log(`Ecuchando peticiones en el puerto ${port}`);
});
