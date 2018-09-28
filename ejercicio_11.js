usuarios = [];

var ejercicio11 = function(nombre,apellido,fnacimiento,telefono,email){
    

    var persona = {};

    persona.nombre = nombre;
    persona.apellido = apellido;
    persona.nacimiento = fnacimiento;
    persona.telefono = telefono;
    persona.email = email;

    usuarios.push(persona);

    for(let element of usuarios){
        console.log(element);
    } 
}