let limite_prestamo = 0

let ocupacion = prompt ("ingrese su ocupacion")

let nombre = prompt ("Ingrese su Nombre")

let lista_ocupacion = ["Estudiante" , "Empleado" , "Monotributista" , "Desempleado" , "Empresario"]

console.log("Lista de Ocupacion" , lista_ocupacion);


let lista_limite = ["$20.000" , "$80.000" , "150.000" , "$20.000" , "$500.000"]

console.log("Limites segun su ocupacion" , lista_limite);


if (ocupacion == "Estudiante") {
    limite_prestamo = "$20.000";   
    alert("tu limite es de $20.000")}  
    
    else if( ocupacion == "Empleado"){
        limite_prestamo = "$80.000";
    alert("tu limite es de $80.000")}

    else if( ocupacion == "Monotributista"){
        limite_prestamo = "$150.000";
    alert("tu limite es de $150.000");}

    else if( ocupacion == "Desempleado"){
        limite_prestamo = "$20.000";
    alert("tu limite es de $20.000");}

    else if( ocupacion == "Empresario"){
        limite_prestamo = "$500.000";
    alert("tu limite es de $500.000");}

    else{alert("no coincide")};



