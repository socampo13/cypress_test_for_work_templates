function eliminarDuplicados(array) {
    return [...new Set(array)];
}

console.log(eliminarDuplicados([1, 2, 3, 2, 2, 3, 5, 4, 4, 5, "hola", "hola"]));