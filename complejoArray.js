const duplicarFilter = (numeros) =>{
    return numeros
    .map(numero => numero*2)
    .filter(numero => numero>10);
};

const arrayNumeros = [5,6,7,8,9];
const resultado = duplicarFilter(arrayNumeros);
console.log("Numeros duplicados y mayores a 10",resultado);