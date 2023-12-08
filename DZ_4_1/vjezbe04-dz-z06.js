document.write("<br/>---------<br/><br/>6. zadatak<br/>");
document.write("<br/>---------<br/><br/>");
let pas = {
  ime: "Reks",
  godina: 2,
};

pas.zvuk = function () {
  return "AV AV!";
};

document.write(
  pas.ime + " u starosti od " + pas.godina + "godine voli lajati: " + pas.zvuk()
);
