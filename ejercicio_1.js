var ejercicio1 = function(numero,arreglo){
    var cont = 0;
    arreglo.forEach(element => {
        if(numero==element){
            cont+=1;
        }
    });

    console.log("existen " + cont + " ocurrencias de dicho numero")
    return cont;
}