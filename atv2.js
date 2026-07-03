function verificaIgualdade(array){ 
        for(let i = 0; i < array.length; i++){
        iguais = true;
        if(array[i] !== array[0]){
            iguais = false;
        }
    }
    console.log(iguais);
}

let numeros = [1, 2, 3, 4, 5]

let numeros1 = [1, 1, 1, 1, 1]

verificaIgualdade(numeros)
console.log("_________________________")
verificaIgualdade(numeros1)
