document.write("<br/>---------<br/><br/>7. zadatak<br/>");
document.write("<br/>---------<br/><br/>");

let vracaKvadrat = function (x) {
  if (typeof x === "number") {
    return x * x;
  } else {
    return "Greska pri unosu!";
  }
};

let broj1 = vracaKvadrat(4);
document.write(broj1);
document.write("<br/>");
let broj2 = vracaKvadrat("Test!");
document.write(broj2);
