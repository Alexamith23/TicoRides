let listaPersonas = [];
let user ="";
let pass ="";
function registrarse()
{
    if (localStorage.getItem("lista") === null) 
    {
        localStorage.setItem("lista", JSON.stringify(listaPersonas));
        alert("Por favor intentelo de nuevo");
    }
    else
    {
        var nombre = document.getElementById("nom").value;
        var apellido = document.getElementById("ape").value;
        var correo = document.getElementById("cor").value;
        var telefono = document.getElementById("num").value;
        var usuario = document.getElementById("us").value;
        var password = document.getElementById("pas1").value;
        var passwordConfirmado = document.getElementById("pas2").value;

        if(passwordConfirmado != password)
        {
            alert("Los passwords no coinciden, por favor vuelva a intentarlo.");
        }
        else
        {
        
            var persona = {"nombre":nombre,"apellido":apellido,"correo":correo,"telefono":telefono,"usuario":usuario,"password":password};
            listaPersonas = JSON.parse(localStorage.getItem("lista"));
            if (listaPersonas != null) 
            {
                // valido el nombre que no repita
                var nuevoArreglo = listaPersonas.filter(function (ob) 
                {
                    return (ob.usuario === usuario)
                });
                if (nuevoArreglo.length == 1) 
                {
                    alert("El nombre ya existe, por favor trate con otro.")
                }
                else
                {
                    //Lo agrego a la lista
                    listaPersonas.push(persona);
                    // Meto la lista en el localStorage
                    localStorage.setItem("lista", JSON.stringify(listaPersonas));  
                    user = usuario;
                    pass = password; 
                    guardarUsuario();
                    alert("!!!Te has registrado con exito!!!");
                    window.open("Seccion_Usuario.html","_self");
                    limpiarBotones();
                    
                    
                }
            }                
        }       
    }   
}

function limpiarBotones()
{
    nombre = document.getElementById("nom").value = "";
    apellido = document.getElementById("ape").value = "";
    correo = document.getElementById("cor").value = "";
    telefono = document.getElementById("num").value = "";
    usuario = document.getElementById("us").value = "";
    password = document.getElementById("pas1").value = "";
    passwordConfirmado = document.getElementById("pas2").value = "";
}

function guardarUsuario()
{
    var usuario = [{"usuario":user,"contra":pass}];
    localStorage.setItem("usuario", JSON.stringify(usuario)); 
}