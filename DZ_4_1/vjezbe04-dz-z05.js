document.write("<br/>---------<br/><br/>5. zadatak<br/>");
document.write("<br/>---------<br/><br/>");
let osoba1 = {
  firstName: "Marko",
  lastName: "Maric",
  age: 40,
  eyeColor: "black",
};
let osoba2 = {
  firstName: "Matko",
  lastName: "Matic",
  age: 32,
  eyeColor: "brown",
};
let osoba3 = {
  firstName: "Pero",
  lastName: "Peric",
  age: 12,
  eyeColor: "blue",
};
let osoba4 = {
  firstName: "Desa",
  lastName: "Knezovic",
  age: 84,
  eyeColor: "purple",
};
let osoba5 = {
  firstName: "Davor",
  lastName: "Martinovic",
  age: 47,
  eyeColor: "black",
};

let nizOsoba = [osoba1, osoba2, osoba3, osoba4, osoba5];

for (let i = 0; i < nizOsoba.length; i++) {
  let osoba = nizOsoba[i];

  document.write(
    "Na indeksu: " +
      i +
      ". se nalazi osoba " +
      osoba.firstName +
      " " +
      osoba.lastName +
      " starosti od " +
      osoba.age +
      " godina.</br>"
  );
}
