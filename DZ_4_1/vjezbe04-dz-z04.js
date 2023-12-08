document.write("<br/>---------<br/><br/>4. zadatak<br/>");
document.write("<br/>---------<br/><br/>");
polje = new Array(1, 2, 3, 4, 7, 8, 5, 6, 9, 55, 12, 4, 85);
let duljinaPolja = polje.length;
document.write(duljinaPolja + "<br/>");

let pom;
for (let i = 0; i < duljinaPolja - 1; i++) {
  for (let j = 0; j < duljinaPolja - 1 - i; j++) {
    if (polje[j] < polje[j + 1]) {
      pom = polje[j];
      polje[j] = polje[j + 1];
      polje[j + 1] = pom;
    }
  }
}
document.write("Sortirani niz silazno: " + polje + "<br/>");

for (let i = 0; i < duljinaPolja - 1; i++) {
  for (let j = 0; j < duljinaPolja - 1 - i; j++) {
    if (polje[j] > polje[j + 1]) {
      pom = polje[j];
      polje[j] = polje[j + 1];
      polje[j + 1] = pom;
    }
  }
}
document.write("Sortirani niz uzlazno: " + polje + "<br/>");

polje.pop();
document.write("Niz nakon izbacenog zadnjeg clana: " + polje + "<br/>");

polje.push(19, 22);
document.write("Niz nakon ubacenog zadnjeg clana: " + polje + "<br/>");

polje2 = new Array("Banana", "Orange", "Apple", "Mango");
document.write("Novi niz: " + polje2 + "<br/>");

polje_final = polje + polje2;
document.write("Zavrsni niz: " + polje_final + "<br/>");
