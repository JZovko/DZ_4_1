document.write("<br/>---------<br/><br/>");
document.write("<br/>2. zadatak<br/><br/>");

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    document.write(i + "<br/>");
    console.log(i);
  }
}

document.write("<br/>---------<br/><br/>");
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    document.write(i * i + "<br/>");
    console.log(i * i);
  }
}
