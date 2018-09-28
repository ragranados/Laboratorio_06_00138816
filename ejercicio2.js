var ejercicio2 = function(arreglo){
    cont = 0;

    for(let num of arreglo){
        cont += num;
    }
    console.log("Suma: " + cont + " Promedio: " + (cont/arreglo.length));
}