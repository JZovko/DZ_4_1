document.write("<br/>---------<br/><br/>8. zadatak<br/>");
document.write("<br/>---------<br/><br/>");

var unos = [
  "Ovo",
  "je",
  "My",
  "prvi",
  "komad",
  "OF",
  "JAVASCRIPT",
  "koda",
  "Koji",
  ",",
  "je",
  "proradio",
];

function kreirajNoviString(unos) {
  let noviString = [];

  for (let i = 0; i < unos.length; i++) {
    let pom = unos[i];

    if (pom.toUpperCase() === pom || pom.length >= 5) {
      noviString.push(pom);
    }
  }

  document.write("Zavrsni niz: " + noviString);
}

kreirajNoviString(unos);
