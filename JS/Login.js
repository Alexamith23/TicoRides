let listaPersonas = [];
var user = "";
var pass = "";
function validar()
{
    user = document.getElementById("txtUser").value;
    pass = document.getElementById("txtPass").value;
    listaPersonas = JSON.parse(localStorage.getItem("lista"));
    var contador = 0;
    var nuevoArreglo = listaPersonas.filter(function (ob) 
    {
        return (ob.usuario === user && ob.password === pass)
    });
    if (nuevoArreglo.length == 1) 
    {
        alert("Bienvenido");
        guardarUsuario();
        window.open("Seccion_Usuario.html","_self");

    }
    else
    {
        alert("El usuario o contrasenia incorrecta")
    }
}
function guardarUsuario()
{
    var usuario = [{"usuario":user,"contra":pass}];
    localStorage.setItem("usuario", JSON.stringify(usuario)); 
}