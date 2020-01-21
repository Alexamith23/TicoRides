function crearLista()
{
    var rides = [];
    var valor = false;
    if (localStorage.getItem("listaRides") === null)
     {
        localStorage.setItem("listaRides", JSON.stringify(rides));
     }
     else
     {
        return valor;
     }
}
function llenarTabla()
{
    if (crearLista) 
    {      
        var lista_personalizada = JSON.parse(localStorage.getItem("listaRides"));;
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
                }
            
            }
        }
    } 
    function hacerBusqueda()
    {
        var desde = document.getElementById("d").value;
        var hasta = document.getElementById("h").value;
        var lista_personalizada = JSON.parse(localStorage.getItem("listaRides"));
        if(lista_personalizada != null)
        {
                var estado = false;
                var tbody = document.querySelector('#tbrides tbody');
                tbody.innerHTML = '';   
                var columna = 0;
                for (var i = 0; i < lista_personalizada.length; i++)
                {
                    
                    if(lista_personalizada[i].desde == desde && lista_personalizada[i].hasta == hasta)
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
                    }
 
                }  
                if(!estado)
                {
                    alert("No hay coincidencias con la búsqueda");
                    llenarTabla();
                    limpiar();
                }
        }
        else
        {
            alert("No hay coincidencias con la búsqueda");
            limpiar();
        }

    }

function cambiarNombre()
{
    var ridesList = JSON.parse(localStorage.getItem("usuario"));
    var usuarioTrue = ridesList[0].usuario;
    document.getElementById("cambiar").innerHTML = usuarioTrue;
}

function limpiar()
{
    document.getElementById("d").value = "";
    document.getElementById("h").value = "";
}