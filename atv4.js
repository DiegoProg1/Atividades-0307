function maiorElemento(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

console.log(maiorElemento([1, 2, 3, 4, 5])); //retorna 5
console.log(maiorElemento([-1, -2, -3, -4, -5])); //retorna -1