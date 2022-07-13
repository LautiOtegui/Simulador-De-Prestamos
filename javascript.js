let limite_prestamo = 0
let nombre = prompt ("Ingrese su Nombre")
let lista_ocupacion = ["estudiante" , "empleado" , "monotributista"]

console.log("Lista de Ocupacion" , lista_ocupacion);


let lista_limite = ["20000" , "80000" , "150000"]

console.log("Limites segun su ocupacion" , lista_limite);

let ocupacion = prompt ("estudiante" , "empleado" , "monotributista").toLowerCase()
let monto_prestamo = 0
let cuotas = 0
switch (ocupacion){
    case "estudiante":
        console.log("Su monto maximo es de 20000.");
        monto_prestamo = prompt ("Ingrese un monto")
        if (monto_prestamo > "20000") {
            console.log("Has superado tu limite")
        }
        else if(monto_prestamo <= "20000"){
            console.log("Su monto es" , monto_prestamo);
        }
        console.log("Ingrese sus cuotas")
        cuotas = prompt ("12 , 28 , 32 , 48")
        if (cuotas == 12 || cuotas == 28 || cuotas == 32 || cuotas == 48) {
            console.log("el precio es" , calcular_cuotas(monto_prestamo , cuotas));
            
        }else{
            
            console.log("Cuotas Invalidas");
        }
        break;
    case "empleado":
        console.log("Su monto maximo es de 80000.");
        monto_prestamo = prompt ("Ingrese un monto")
        if (monto_prestamo > "80000") {
            console.log("Has superado tu limite")
        }
        else if(monto_prestamo <= "80000"){
            console.log("Su monto es" , monto_prestamo);
        }
        console.log("Ingrese sus cuotas")
        cuotas = prompt ("12 , 28 , 32 , 48")
        if (cuotas == 12 || cuotas == 28 || cuotas == 32 || cuotas == 48) {
            console.log("el precio es" , calcular_cuotas(monto_prestamo , cuotas));
            
        }else{
            
            console.log("Cuotas Invalidas");
        }
        break;
    case "monotributista":
        console.log("Su monto maximo es de 150000.");
        monto_prestamo = prompt ("Ingrese un monto")
        if (monto_prestamo > "150000") {
            console.log("Has superado tu limite")
        }
        else if(monto_prestamo <= "150000"){
            console.log("Su monto es" , monto_prestamo);
        }
        console.log("Ingrese sus cuotas")
        cuotas = prompt ("12 , 28 , 32 , 48")
        if (cuotas == 12 || cuotas == 28 || cuotas == 32 || cuotas == 48) {
            console.log("el precio es" , calcular_cuotas(monto_prestamo , cuotas));
            
        }else{
            
            console.log("Cuotas Invalidas");
        }
        break;
    default:alert("Ocupacion erronea.")
        break;
}

function calcular_cuotas (monto_prestamo , cuotas){
    let total_cuotas = monto_prestamo / cuotas
    return total_cuotas
}