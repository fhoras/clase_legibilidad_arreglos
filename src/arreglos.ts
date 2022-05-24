/* Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee */
let cant = document.getElementById("cantidad");

function mostrarVectorInvertido(arreglo: number[]) {
  let cantidad: number = arreglo.length;
  let numeros_invertidos: number[] = [];
  for (let i = cantidad - 1; 0 <= i; i--) {
    numeros_invertidos[cantidad - 1 - i] = arreglo[i];
    console.log(i);
  }
  console.log(numeros_invertidos);
}

function mostrar_numeros(cantidad: number) {
  let numero: number = 0;
  let numeros: number[] = [];
  for (let i = 0; i < cantidad; i++) {
    numero = prompt("Ingrese n°");
    numeros[i] = numero;
  }
  console.log(numeros);
  mostrarVectorInvertido(numeros);
}

btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  mostrar_numeros(cantidad);
});
