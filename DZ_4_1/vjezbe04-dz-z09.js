document.write("<br/>---------<br/><br/>9. zadatak<br/>");
document.write("<br/>---------<br/><br/>");

function ispisSavrsenihBrojeva(ulazniBroj) {
  for (let i = 1; i <= ulazniBroj; i++) {
    if (jeSavrsenBroj(i)) {
      document.write(i + "<br/>");
    }
  }
}

function jeSavrsenBroj(broj) {
  let sum = 0;

  for (let j = 1; j <= broj / 2; j++) {
    if (broj % j === 0) {
      sum += j;
    }
  }

  return sum === broj;
}

ispisSavrsenihBrojeva(100);
