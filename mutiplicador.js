function tablaDeMultiplicar(numero) {
    let i = 1
    while (i <= 10){
        const resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`);
        i++
    }
 
 }
 tablaDeMultiplicar(5);