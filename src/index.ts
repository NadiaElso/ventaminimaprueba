let vendedor1 = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2 = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3 = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4 = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5 = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];

function nombrevendedoryventaminimadelprimertrimestre(array: number[] = []) {
  let semana1: number;
  semana1 = 0;
  let semana2: number;
  semana2 = 0;
  let semana3: number;
  semana3 = 0;
  let semana4: number;
  semana4 = 0;
  let semana5: number;
  semana5 = 0;
  let semana6: number;
  semana6 = 0;
  let semana7: number;
  semana7 = 0;
  let semana8: number;
  semana8 = 0;
  let semana9: number;
  semana9 = 0;
  let semana10: number;
  semana10 = 0;
  let semana11: number;
  semana11 = 0;
  let semana12: number;
  semana12 = 0;

  let nombredelvendedor: number;
  nombredelvendedor = 0;
  let nombre: string;
  nombre = "";
  //nombredelvendedor=(prompt("Ingresa tu nombre"));
  if ((nombredelvendedor = 1)) {
    nombre = "Camila";
  } else if ((nombredelvendedor = 2)) {
    nombre = "Franco";
  } else if ((nombredelvendedor = 3)) {
    nombre = "Sofia";
  } else if ((nombredelvendedor = 4)) {
    nombre = "Matias";
  } else if ((nombredelvendedor = 5)) {
    nombre = "Agustina";
  }

  for (let index = 0; index < array.length; index++) {
    if (array[0] !== 0) {
      semana1 = array[0];
    }
    if (array[1] !== 0) {
      semana2 = array[1];
    }
    if (array[2] !== 0) {
      semana3 = array[2];
    }
    if (array[3] !== 0) {
      semana4 = array[3];
    }
    if (array[4] !== 0) {
      semana5 = array[4];
    }
    if (array[5] !== 0) {
      semana6 = array[5];
    }
    if (array[6] !== 0) {
      semana7 = array[6];
    }
    if (array[7] !== 0) {
      semana8 = array[7];
    }
    if (array[8] !== 0) {
      semana9 = array[8];
    }
    if (array[9] !== 0) {
      semana10 = array[9];
    }
    if (array[10] !== 0) {
      semana11 = array[10];
    }
    if (array[11] !== 0) {
      semana12 = array[11];
    }
  }
  if (
    semana1 < semana2 &&
    semana1 < semana3 &&
    semana1 < semana4 &&
    semana1 < semana5 &&
    semana1 < semana6 &&
    semana1 < semana7 &&
    semana1 < semana8 &&
    semana1 < semana9 &&
    semana1 < semana10 &&
    semana1 < semana11 &&
    semana1 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana1 +
        nombre
    );
  }
  if (
    semana2 < semana1 &&
    semana2 < semana12 &&
    semana2 < semana3 &&
    semana2 < semana4 &&
    semana2 < semana5 &&
    semana2 < semana6 &&
    semana2 < semana7 &&
    semana2 < semana8 &&
    semana2 < semana9 &&
    semana2 < semana10 &&
    semana2 < semana11
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana2 +
        nombre
    );
  }
  if (
    semana3 < semana1 &&
    semana3 < semana2 &&
    semana3 < semana4 &&
    semana3 < semana5 &&
    semana3 < semana6 &&
    semana3 < semana7 &&
    semana3 < semana8 &&
    semana3 < semana9 &&
    semana3 < semana10 &&
    semana3 < semana11 &&
    semana3 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana3 +
        nombre
    );
  }
  if (
    semana4 < semana1 &&
    semana4 < semana2 &&
    semana4 < semana3 &&
    semana4 < semana5 &&
    semana4 < semana6 &&
    semana4 < semana7 &&
    semana4 < semana8 &&
    semana4 < semana9 &&
    semana4 < semana10 &&
    semana4 < semana11 &&
    semana4 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana4 +
        nombre
    );
  }
  if (
    semana5 < semana1 &&
    semana5 < semana2 &&
    semana5 < semana3 &&
    semana5 < semana4 &&
    semana5 < semana6 &&
    semana5 < semana7 &&
    semana5 < semana8 &&
    semana5 < semana9 &&
    semana5 < semana10 &&
    semana5 < semana11 &&
    semana5 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana5 +
        nombre
    );
  }
  if (
    semana6 < semana1 &&
    semana6 < semana2 &&
    semana6 < semana3 &&
    semana6 < semana4 &&
    semana6 < semana5 &&
    semana6 < semana7 &&
    semana6 < semana8 &&
    semana6 < semana9 &&
    semana6 < semana10 &&
    semana6 < semana11 &&
    semana6 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana6 +
        nombre
    );
  }
  if (
    semana7 < semana1 &&
    semana7 < semana2 &&
    semana7 < semana3 &&
    semana7 < semana4 &&
    semana7 < semana5 &&
    semana7 < semana6 &&
    semana7 < semana8 &&
    semana7 < semana9 &&
    semana7 < semana10 &&
    semana7 < semana11 &&
    semana7 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana7 +
        nombre
    );
  }
  if (
    semana8 < semana1 &&
    semana8 < semana2 &&
    semana8 < semana3 &&
    semana8 < semana4 &&
    semana8 < semana5 &&
    semana8 < semana6 &&
    semana8 < semana7 &&
    semana8 < semana9 &&
    semana8 < semana10 &&
    semana8 < semana11 &&
    semana8 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana8 +
        nombre
    );
  }
  if (
    semana9 < semana1 &&
    semana9 < semana2 &&
    semana9 < semana3 &&
    semana9 < semana4 &&
    semana9 < semana5 &&
    semana9 < semana6 &&
    semana9 < semana7 &&
    semana9 < semana8 &&
    semana9 < semana10 &&
    semana9 < semana11 &&
    semana9 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana9 +
        nombre
    );
  }
  if (
    semana10 < semana1 &&
    semana10 < semana2 &&
    semana10 < semana3 &&
    semana10 < semana4 &&
    semana10 < semana5 &&
    semana10 < semana6 &&
    semana10 < semana7 &&
    semana10 < semana8 &&
    semana10 < semana9 &&
    semana10 < semana11 &&
    semana10 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana10 +
        nombre
    );
  }
  if (
    semana11 < semana1 &&
    semana11 < semana2 &&
    semana11 < semana3 &&
    semana11 < semana4 &&
    semana11 < semana5 &&
    semana11 < semana6 &&
    semana11 < semana7 &&
    semana11 < semana8 &&
    semana11 < semana9 &&
    semana11 < semana10 &&
    semana11 < semana12
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana11 +
        nombre
    );
  }
  if (
    semana12 < semana1 &&
    semana12 < semana2 &&
    semana12 < semana3 &&
    semana12 < semana4 &&
    semana12 < semana5 &&
    semana12 < semana6 &&
    semana12 < semana7 &&
    semana12 < semana8 &&
    semana12 < semana9 &&
    semana12 < semana10 &&
    semana12 < semana11
  ) {
    console.log(
      "La venta mínima del primer trimestre y el nombre del vendedor es:" +
        semana12 +
        nombre
    );
  }

  return nombrevendedoryventaminimadelprimertrimestre;
}

nombrevendedoryventaminimadelprimertrimestre(vendedor1);
