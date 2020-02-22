const hbs = require('hbs');
 
const getAnio = () => {hbs.registerHelper("getAnio", () => {
  return new Date().getFullYear();
})};

const capitalizar = () => {hbs.registerHelper("capitalizar", texto => {
  let palabras = texto.split(" ");
  palabras.forEach((palabra, idx) => {
    palabras[idx] =
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
  return palabras.join(" ");
})};

module.exports = {
    getAnio,
    capitalizar
}