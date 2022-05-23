/* Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee */
function numeros_varios(cantidad: number) {
  let numero: number = 0;
  let numeros: number[] = [];
  for (let i = 0; i <= cantidad; i++) {
    numero = prompt("Ingrese n°");
    numeros[i] = numero;
  }
  console.log(numeros);
}
console.log(numeros_varios(5));
