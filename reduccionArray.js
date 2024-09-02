const contarCaracteres = (strings) => {
    return strings.reduce((total,str) => total + str.length,0);
};

const arrayStrings = ["Hola","mundo","JavaScript"];
const totalCaracteres = contarCaracteres(arrayStrings);
console.log("Numero total de caracteres: ",totalCaracteres);