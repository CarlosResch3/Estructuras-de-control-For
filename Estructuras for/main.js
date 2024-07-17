//Ejercicio 1
//Imprimir los números impares del 1 al 50

for (let i = 1; i <= 50; i++){
    if (i % 2 !== 0){
        console.log(i);
        alert (i);
    }
}


//Para el ejercicio 2, no encontro el arreglo de los Pokemon

//Ejercicio 3

const arrayMixto = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

console.log("Elementos que son tipo número:");
alert ("Elementos que son tipo número:");
for (let i = 0; i < arrayMixto.length; i++){
    if (typeof arrayMixto[i] === "number"){
        console.log(arrayMixto[i]);
        alert (arrayMixto[i]);
    }
}