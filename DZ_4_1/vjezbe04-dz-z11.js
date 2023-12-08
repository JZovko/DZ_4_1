document.write("<br/>---------<br/><br/>11. zadatak<br/>");
document.write("<br/>---------<br/><br/>");

const tempDay = [
  "2023-11-29",
  -1,
  0,
  -0.5,
  0.5,
  0,
  1.2,
  1.8,
  2,
  3,
  4,
  6,
  9,
  12,
  7,
  6,
  6,
  8,
  5,
  4,
  2,
  3,
  2,
  1,
  0,
];
function ispisiTemperaturnePodatke(temperature) {
  const najmanjaTemperatura = Math.min(...temperature.slice(1));
  const najvecaTemperatura = Math.max(...temperature.slice(1));
  const prosjecnaTemperatura =
    temperature.slice(1).reduce((acc, temp) => acc + temp, 0) /
    (temperature.length - 1);

  document.write(temperature[0] + "<br/>");
  document.write(najmanjaTemperatura + "<br/>");
  document.write(najvecaTemperatura + "<br/>");
  document.write(prosjecnaTemperatura + "<br/>");
}

ispisiTemperaturnePodatke(tempDay);
