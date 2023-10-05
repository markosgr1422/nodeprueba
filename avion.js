

let velocidad = 268;
let altura = 278;
let alturaOk = 0;
let velocidadOk = 0;

if (velocidad >= 268 && velocidad <= 278){
    velocidadOk = true
}else{
    velocidadOk = false
} 

if (altura >= 150 && altura <= 300){
    alturaOk = true
}else {
    alturaOk= false
}

if ((velocidadOk == true) && (alturaOk == true)){
    console.log("el avion puede aterrizar")
}else if ((velocidadOk == true) && (alturaOk == false)){
    console.log("el avion no puede aterrizar, verificar altura necesaria")
   
}else if ((velocidadOk == false) && (alturaOk == true)){
    console.log("el avion no puede aterrizar, verificar la velocidad necesaria")
}else{
    console.log("el avion no puede aterrizar, verificar altura y velocidad necesaria")
}