var usuarioTrue;
var ridesList;
var personas;
function cambiarNombre()
{
    ridesList = JSON.parse(localStorage.getItem("usuario"));
    usuarioTrue = ridesList[0].usuario;
    document.getElementById("cambiarTexto").innerHTML = 
    "Hola querido "+"'"+ridesList[0].usuario+"'"+" en este apartado configura tu cuenta, y disfruta de todos los beneficios que te brinda nuestro sitio web TicoRides";
}
 function cargarDatos()
 {
    personas = JSON.parse(localStorage.getItem("lista"));
    for(var i = 0; i < personas.length;i++)
    {
        if(personas[i].usuario == usuarioTrue)
        {
            document.getElementById("nom").value = personas[i].nombre;
            document.getElementById("ape").value = personas[i].apellido;
            document.getElementById("cor").value = personas[i].correo;
            document.getElementById("tel").value = personas[i].telefono;
            document.getElementById("usu").value = personas[i].usuario;
        }
    }
 }

 function modificarCuenta()
 {
    for(var i = 0; i < personas.length; i++)
    {
            if(personas[i].usuario == usuarioTrue)
            {
                ridesList[0].usuario = document.getElementById("usu").value;
                personas[i].nombre = document.getElementById("nom").value;
                personas[i].apellido = document.getElementById("ape").value;
                personas[i].correo = document.getElementById("cor").value;
                personas[i].telefono = document.getElementById("tel").value;
                personas[i].usuario = document.getElementById("usu").value;
                localStorage.setItem("lista", JSON.stringify(personas));     
                localStorage.setItem("usuario", JSON.stringify(ridesList));
                window.open("Seccion_Usuario.html","_self");           
            }
    }
 }