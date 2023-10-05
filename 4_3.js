let operador = "/7";
let numero1 = 6;
let numero2 = 3;
let resultado = 0;

switch (operador) {
  case operador = "+":
    resultado = (numero1 + numero2)
  console.log("el resultado de la suma " + numero1 + "+" + numero2 + " es " + resultado);
  break;

  case operador = "-":
    resultado = (numero1 - numero2)
  console.log("el resultado de la resta " + numero1 + "-" + numero2 + " es " + resultado);
  break;

  case operador = "*":
    resultado = (numero1 * numero2)
  console.log("el resultado de la multiplicacion " + numero1 + "*" + numero2 + " es " + resultado);
  break;

  case operador = "/":
    resultado = (numero1 / numero2)
  console.log("el resultado de la division " + numero1 + "/" + numero2 + " es " + resultado);
  break;

  default:
    console.log("Las operaciones aceptadas son: sumar- restar- multiplicar- dividir");
}
