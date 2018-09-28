var ejercicio9 = function(numero){
    arr = [];

    for(let i = 0 ; i < 20 ; i++){
        arr.push(Math.floor((Math.random() * 20) + 1));
    }

    var gana = true;

    while(gana){

        let hola = prompt("Ingrese un numero");

        hola = parseInt(hola);

        if(arr.includes(hola)){
            gana = false;
            console.log("Ganaste!");
        }
        
    }
}