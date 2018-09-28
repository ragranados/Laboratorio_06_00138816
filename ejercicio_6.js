var ejercicio6 = function(palabra){
    palabra = palabra.split("");
    palabra.forEach((element,index) => {
        if(palabra[index]==="m"){palabra[index]="0"};
        if(palabra[index]==="u"){palabra[index]="1"};
        if(palabra[index]==="r"){palabra[index]="2"};
        if(palabra[index]==="c"){palabra[index]="3"};
        if(palabra[index]==="i"){palabra[index]="4"};
        if(palabra[index]==="e"){palabra[index]="5"};
        if(palabra[index]==="l"){palabra[index]="6"};
        if(palabra[index]==="a"){palabra[index]="7"};
        if(palabra[index]==="g"){palabra[index]="8"};
        if(palabra[index]==="o"){palabra[index]="9"};
    });

    return palabra.join("");
}