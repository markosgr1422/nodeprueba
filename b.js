let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let multiplicacion = (n1, n2) => n1 * n2;
let dividision = (n1, n2) => n1 / n2;

let calculadora = (n1, n2, operacion) => operacion(n1, n2);

// let calculadora tiene 3 parametros adentro, entre ellas operacion que puede tener un nombre X,
// con => cambiamos operacion  (X) por algun let de arriba. eso es callback.
// solo queda usar let calculadora y poner unos de los let de arriba. (suma,resta...)

console.log(calculadora(2,2,multiplicar))

