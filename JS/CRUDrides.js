let lista_de_rides = [];
let idGlobal ="";
let arregloGlobal=[];
let usuarioTrue = "";
function registrarRide()
{
    if (localStorage.getItem("listaRides") === null) 
    {
        localStorage.setItem("listaRides", JSON.stringify(lista_de_rides));
        alert("Por favor intentelo de nuevo");
    }
    else
    {
        var codigo = document.getElementById("cod").value;
        var nombre = document.getElementById("nom").value;
        var desde = document.getElementById("desde").value;
        var hasta = document.getElementById("hasta").value;
        var salida = document.getElementById("hSalida").value;
        var llegada = document.getElementById("hLlegada").value;


        var dias = obtenerDias("l","k","m","j","v","s","d");
        var pertenece = usuarioTrue;
        if(dias == "")
        {
            alert("Por favor seleccione al menos un día");
        }
        else
        {
            var ride = {"codigo":codigo,"nombre":nombre,"desde":desde,"hasta":hasta,"salida":salida,"llegada":llegada,"dias":dias,"usuario":pertenece};

            //----------
    
            lista_de_rides = JSON.parse(localStorage.getItem("listaRides"));
            if (lista_de_rides != null) 
                {
                    // valido el nombre que no repita
                    var nuevoArreglo = lista_de_rides.filter(function (ob) 
                    {
                        return (ob.codigo === codigo || ob.nombre === nombre )
                    });
                    if (nuevoArreglo.length == 1) 
                    {
                        alert("Parece que hay datos repetidos, ya sabes no se permite ingresar valores iguales como el codigo, nombre o que los días y las horas coincidan con otros rides");
                    }
                    else
                    {
                        if(salida >= llegada)
                        {
                            alert("Las horas no coinciden");
                        }
                        else
                        {
                            //Lo agrego a la lista
                            lista_de_rides.push(ride);
                            // Meto la lista en el localStorage
                            localStorage.setItem("listaRides", JSON.stringify(lista_de_rides));   
                            alert("!!!Te has registrado con exito!!!");
                            cargarRides();
                            cerrar_ventana_Crear();
                        }
                        
                    }
                }       
        }
      
    }   
}


function obtenerDias(l,k,m,j,v,s,d)
{
    var dias = "";
    var lunes = document.getElementById(l).checked;
    var martes = document.getElementById(k).checked;
    var miercoles = document.getElementById(m).checked;
    var jueves = document.getElementById(j).checked;
    var viernes = document.getElementById(v).checked;
    var sabado = document.getElementById(s).checked;
    var domingo = document.getElementById(d).checked;
    if(lunes)
    {
        dias +="L,";
    }
    if(martes)
    {
        dias +="K,";
    }
    if(miercoles)
    {
        dias +="M,";
    }
    if(jueves)
    {
        dias +="J,";
    }
   if(viernes)
    {
        dias +="V,";
    }
   if(sabado)
    {
        dias +="S,";
    }
    if(domingo)
    {
        dias +="D";
    }
    return dias;
}

function crearLista()
{
    var rides = [];
    var valor = false;
    if (localStorage.getItem("listaRides") === null)
     {
        localStorage.setItem("listaRides", JSON.stringify(rides));
        alert("Por favor vuelva a intentarlo");
     }
     else
     {
        return valor;
     }
}



function cargarRides()
{
    if (crearLista) 
    {      
        var ridesList  = JSON.parse(localStorage.getItem("listaRides"));
        var lista_personalizada = [];
        if(ridesList != null)
        {
            for(var i = 0; i < ridesList.length;i++)
            {
                if(ridesList[i].usuario == usuarioTrue)
                {
                    lista_personalizada.push(ridesList[i]);      
                }
            }
            if(lista_personalizada != null)
            {
                var tbody = document.querySelector('#tbrides tbody');
                tbody.innerHTML = '';
    
    
                for (var i = 0; i < lista_personalizada.length; i++) {
                    var row = tbody.insertRow(i);   
                    var codigo = row.insertCell(0);
                    var nombre = row.insertCell(1);
                    var salida = row.insertCell(2);
                    var llegada = row.insertCell(3);
                    var Hsalida = row.insertCell(4);
                    var Hlleagada = row.insertCell(5);
                    var dias = row.insertCell(6);
                    var actions = row.insertCell(7);
                    
                    codigo.innerHTML = lista_personalizada[i].codigo;
                    nombre.innerHTML = lista_personalizada[i].nombre;
                    salida.innerHTML = lista_personalizada[i].desde
                    llegada.innerHTML = lista_personalizada[i].hasta
                    Hsalida.innerHTML = lista_personalizada[i].salida
                    Hlleagada.innerHTML = lista_personalizada[i].llegada;
                    dias.innerHTML = lista_personalizada[i].dias;
    
                    
                    //Botón Edit
                    var buttonA = document.createElement('input');
                    buttonA.type = 'button';
                    buttonA.className = 'button-primary';
                    buttonA.id = lista_personalizada[i].codigo;
                    buttonA.value = 'Edit';
                    
    
                    buttonA.onclick = function hellow()
                    {
                        abrir_ventana_Editar(this);
                    };
                    actions.appendChild(buttonA);
    
    
    
                    //Botón Delit
                    var buttonB = document.createElement('input');
                    buttonB.type = 'button';
                    buttonB.className = 'button-primary';
                    buttonB.id = lista_personalizada[i].codigo;
                    buttonB.value = 'Delete';
                    buttonB.onclick = function hellow() {
                        var pregunta = confirm("Desea borrar el registro?");
                        if(pregunta)
                        {
                            removeItem(this,lista_personalizada);
                        }
                        else
                        {
                            alert("Cancelado");
                        }
                        
                    };
                    actions.appendChild(buttonB);
                    tbody.appendChild(row);
                }
            
            }
             

        }
    } 
}

function abrir_ventana_Crear()
{
    document.getElementById("abrir_ventana_para_crear").style.display ="block";
}


function cerrar_ventana_Crear()
{
    document.getElementById("abrir_ventana_para_crear").style.display ="none";
}




function abrir_ventana_Editar(button)
{
    var ridesList = JSON.parse(localStorage.getItem("listaRides"));
    idGlobal = button.id;
    arregloGlobal = ridesList;
    for(var i = 0; i < ridesList.length;i++)
    {
        if(ridesList[i].codigo == button.id)
        {
            document.getElementById("codE").value = ridesList[i].codigo;
            document.getElementById("nomE").value = ridesList[i].nombre;
            document.getElementById("desdeE").value = ridesList[i].desde;
            document.getElementById("hastaE").value = ridesList[i].hasta;
            document.getElementById("hSalidaE").value = ridesList[i].salida;
            document.getElementById("hLlegadaE").value = ridesList[i].llegada;
            document.getElementById("abrir_ventana_para_editar").style.display ="block";
        }
    }
    

}




function editar()
{
    var codNuevo = document.getElementById("codE").value;
    var nomNuevo = document.getElementById("nomE").value;
    var days = obtenerDias("lE","kE","mE","jE","vE","sE","dE");
    if(arregloGlobal.length == 0 || idGlobal == "")
    {
        alert("Por favor selecione un ride");
    }
    else
    {
        var nuevoArreglo = lista_de_rides.filter(function (ob) 
        {
            return (ob.codigo === codNuevo || ob.nombre === nomNuevo || (ob.dias === days))
        });
        if (nuevoArreglo.length == 1) 
        {
            alert("Parece que hay datos repetidos, ya sabes no se permite ingresar valores iguales como el codigo, nombre o que los días y las horas coincidan con otros rides");
        }
        else
        {
            for(var i = 0; i < arregloGlobal.length; i++)
            {
                    if(arregloGlobal[i].codigo == idGlobal)
                    {
                        arregloGlobal[i].codigo = document.getElementById("codE").value;
                        arregloGlobal[i].nombre = document.getElementById("nomE").value;
                        arregloGlobal[i].desde = document.getElementById("desdeE").value;
                        arregloGlobal[i].hasta = document.getElementById("hastaE").value;
                        arregloGlobal[i].salida = document.getElementById("hSalidaE").value;
                        arregloGlobal[i].llegada = document.getElementById("hLlegadaE").value;
                        arregloGlobal[i].dias =  obtenerDias("lE","kE","mE","jE","vE","sE","dE");
                        localStorage.setItem("listaRides", JSON.stringify(arregloGlobal));
                        cargarRides();
                        cerrarVentaEditar();
                        arregloGlobal = [];
                        idGlobal = "";                 
                    }
            }

        }
    }
    
}

function cerrarVentaEditar()
{
    document.getElementById("abrir_ventana_para_editar").style.display ="none";
}

function ventCrear()
{
    document.getElementById("ventC").style.display ="block";
}

function obtenerUsuario()
{
    var x = document.getElementById("us").value;
    human = x;
} 

function cambiarNombre2()
{
    var ridesList = JSON.parse(localStorage.getItem("usuario"));
    usuarioTrue = ridesList[0].usuario;
    document.getElementById("cambiarUsu2").innerHTML = usuarioTrue;
}

function removeItem (button)
{
    var arreglo = JSON.parse(localStorage.getItem("listaRides"));
   for(var i = 0; i < arreglo.length; i++)
   {
        if(arreglo[i].codigo == button.id)
        {
            arreglo.splice(i,1);
            localStorage.setItem("listaRides", JSON.stringify(arreglo));
            cargarRides();
        }
   }
}

function limpiarBotones()
{
    document.getElementById("codE").value ="";
    document.getElementById("nomE").value ="";
    document.getElementById("desdeE").value ="";
    document.getElementById("hastaE").value ="";
    document.getElementById("hSalidaE").value ="";
    document.getElementById("hLlegadaE").value ="";
}

function bucarRideporCodigo()
{
    var buscar = document.getElementById("hacerBusqueda").value;
    if(buscar == "")
    {
        alert("Por favor ingrese un código");
    }
    else
    {
        var lista_personalizada = JSON.parse(localStorage.getItem("listaRides"));
        if(lista_personalizada != null)
        {
                var estado = false;
                var tbody = document.querySelector('#tbrides tbody');
                tbody.innerHTML = '';   
                var columna = 0;
                for (var i = 0; i < lista_personalizada.length; i++)
                {
                    
                    if(lista_personalizada[i].codigo == buscar && lista_personalizada[i].usuario == usuarioTrue)
                    {
                        columna = i;
                        if(columna > 0)
                        {
                            columna = 0;
                        }
                        var row = tbody.insertRow(columna);   
                        var codigo = row.insertCell(0);
                        var nombre = row.insertCell(1);
                        var salida = row.insertCell(2);
                        var llegada = row.insertCell(3);
                        var Hsalida = row.insertCell(4);
                        var Hlleagada = row.insertCell(5);
                        var dias = row.insertCell(6);
                        var duenio = row.insertCell(7);   

                        codigo.innerHTML = lista_personalizada[i].codigo;
                        nombre.innerHTML = lista_personalizada[i].nombre;
                        salida.innerHTML = lista_personalizada[i].desde
                        llegada.innerHTML = lista_personalizada[i].hasta
                        Hsalida.innerHTML = lista_personalizada[i].salida
                        Hlleagada.innerHTML = lista_personalizada[i].llegada;
                        dias.innerHTML = lista_personalizada[i].dias;
                        duenio.innerHTML = lista_personalizada[i].usuario;
                        tbody.appendChild(row);
                        estado = true;
                        columna++;
                        alert("Si lo hago");
                    }
 
                }  
                if(!estado)
                {
                    alert("No hay coincidencias con la búsqueda");
                    cargarRides();
                }
        }
        else
        {
            alert("No hay coincidencias con la búsqueda");
        }
    }
   
}