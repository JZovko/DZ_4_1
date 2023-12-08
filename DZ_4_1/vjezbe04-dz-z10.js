document.write("<br/>---------<br/><br/>10. zadatak<br/>");
document.write("<br/>---------<br/><br/>");

function generirajRandomBrojeve(min, max) {
  for (let i = 0; i < 5; i++) {
    let randomBroj = Math.floor(Math.random() * (max - min + 1)) + min;
    document.write(randomBroj + "<br/>");
  }
}

generirajRandomBrojeve(13, 58);
