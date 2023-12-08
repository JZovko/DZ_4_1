document.write("<br/>---------<br/><br/>3. zadatak<br/>");
document.write("<br/>---------<br/><br/>");

for (let i = 1; i <= 1000; i++) {
  var Prost = true;
  if (i == 1) {
  } else if (i == 2) {
    document.write("<br/>" + i);
  } else {
    for (let j = 2; j <= i / 2 + 1; j++) {
      if (i % j == 0) {
        Prost = false;
      }
    }
    if (Prost) {
      document.write("<br/>" + i);
    }
  }
}
