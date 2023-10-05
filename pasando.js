function laClaveSecreta(caracteres) {
    const mensaje = [];
    let palabra = "";

    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] === " ") {
            if (palabra !== "") {
                mensaje.push(palabra);
                palabra = "";
            }
            mensaje.push(" ");
        } else if (caracteres[i] === "*") {
            // No hacer nada, omitir el asterisco
        } else {
            palabra = caracteres[i];
        }
    }

    if (palabra !== "") {
        mensaje.push(palabra);
    }

    return mensaje.join("");
}


console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));
console.log(laClaveSecreta(["s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]));

