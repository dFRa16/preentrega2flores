//regristro de datos concierto
const dias = [
    {fecha: "12oct" },
    {fecha: "22oct"},
    {fecha: "30oct" },
    
];
let datoNombre = prompt("ingresa tu nombre completo")
alert ("bienvenido \n" + "" + datoNombre)

let fechas = alert("estas son las fechas disponibles \n 1:12oct \n 2:22oct \n 2:30oct")
let desicion = prompt ("selecciona tu fecha \n 1 : 12oct \n 2 : 22oct \n 3: 18oct ")
if (desicion == "1" || "2" || "3" ){
    alert ("tu fecha esta dispoible");  
} else (desicion = ""); {
    alert ("vuelve a ingresar las fechas disponibles");
}
while (desicion == ""); {
    let desicion = prompt ("selecciona tu fecha \n 1 : 12oct \n 2 : 22oct \n 3: 18oct")
}



