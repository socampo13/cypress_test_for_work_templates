function parOImpar(numero) {
    return numero % 2 === 0 ? "par" : "impar"; //Solo numeros enteros. Decimales, fracciones, etc no las tendrá en cuenta
}

console.log(parOImpar(31));
console.log(parOImpar(28));