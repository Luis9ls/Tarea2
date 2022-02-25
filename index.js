let usuario = prompt ("Ingrese su Usuario") 
console.log(usuario);

let contraseña =parseFloat( prompt ("Ingrese su Contraseña"))
console.log(contraseña);

if (usuario = "administrador" && contraseña == 1234) {
    alert("Bienvenido") ;
console.log("Bienvenido");

let numero1= prompt("ingrese el primer numero")
let numero2= prompt("ingrese el segundo numero")
let numero3= prompt("ingrese el tercer numero")

let mayor = Math.max (numero1, numero2, numero3);

console.log ("El numero mayor es " + mayor);

let menor = Math.min (numero1, numero2, numero3);

console.log ("El numero menor es " + menor);
}
else{
    console.log("Tu usuario y/o contraseña son incorrectas");
alert ( "Tu usuario y/o contraseña son incorrectas" ) ;
location.href= "./404.html"
}

let saludo = "Hola Mundo"
function button (){
    console.log (saludo);
    alert (saludo);
}



    

    