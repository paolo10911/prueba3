//esta funcion lo que hace es poder modificar los datos de la tabla recuperando los datos ingresados en el formulario recibe como parametro el listadonuevo 
var modificar = (listadonuevo)=>{
    //cada variable let recupera los datos de cada id ingresado
    let enombre = document.getElementById("nombre");
    let ecorreo = document.getElementById("email");
    let econtrasenia = document.getElementById("contrasenia");
    let enumero = document.getElementById("numero");
    let ecumpleanios = document.getElementById("cumpleanios");
    let elenguaje = document.getElementById("selector");
    let eBtnEditarUp = document.getElementById('btnEditar');
   
    //cada variable recupera el valor de los datos recuperados anteriormente
    let nombre = enombre.value;
    let correo = ecorreo.value;
    let contrasenia = econtrasenia.value;
    let numero = parseInt(enumero.value);
    let cumpleanios = ecumpleanios.value;
    let lenguaje = elenguaje.value;
    let indice = eBtnEditarUp.value;
    listadonuevo[indice].nombre = nombre;
    listadonuevo[indice].correo = correo;
    listadonuevo[indice].contrasenia = contrasenia;
    listadonuevo[indice].numero = numero;
    listadonuevo[indice].cumpleanios = cumpleanios;
    listadonuevo[indice].lenguaje = lenguaje;
    //aqui se guardan los datos recuperados en el localstorage 
    localStorage.setItem('programadores',JSON.stringify(listadonuevo));
    //se carga la tabla para ver los datos modificados y datos ya ingresados anteriormente con registrar
    cargarTabla(listadonuevo)
}
//esta funcion elimina los datos de una tabla mostrando los datos que se van a eliminar para confirmar si son los correctos, al confirmar borra los datos y actualiza la tabla
var eliminar = (listadonuevo)=>{
    //variables que recuperan datos del boton eliminar 
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    console.log(listadonuevo)
    lista = listadonuevo.filter((p)=>p.id!=indice)
    lista = lista.map((p,index)=>{return {...p,'id':index}})
    console.log(lista)
    //aqui se guardan los datos recuperados en el localstorage 
    localStorage.setItem('programadores',JSON.stringify(lista));
    //se carga la tabla para mostrar los datos guardados
    cargarTabla(lista)
    
}
//esta funcion carga la tabla actual para mostrar todos los datos 
var cargarTabla = (listadonuevo)=>{
    //se recuperan los datos de los id dentro de los parentesis para poder cargar la tabla
    let tabla = document.getElementById("contenedorTabla");
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("email");
    let contrasenia = document.getElementById("contrasenia");
    let numero = document.getElementById("numero");
    let cumpleanios = document.getElementById("cumpleanios");
    let lenguaje = document.getElementById("selector");

    render = "<table>"
    render+="<tr><th>Nombre</th><th>Correo</th><th>Contrasenia</th><th>Numero</th><th>Cumpleanios</th><th>Lenguaje</th><th>Accion</th></tr>"
    //este for crea la tabla 
    for (let i = 0; i <listadonuevo.length; i++) {
        const element = listadonuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.correo+"</td>"
        render+="<td>"+element.contrasenia+"</td>"
        render+="<td>"+element.numero+"</td>"
        render+="<td>"+element.cumpleanios+"</td>"
        render+="<td>"+element.lenguaje+"</td>"
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render += "</table>"
    //se renderisa la tabla
    tabla.innerHTML = render;
    //for que 
    for (let i = 0; i < listadonuevo.length; i++) {
        var Btn = document.getElementById("btnEditar"+i)
        var Btn2 = document.getElementById("btnEliminar"+i)
        let element = listadonuevo[i]
        //se añade evento listener que al dar click en el boton indicado se modifica los datos en la tabla 
        Btn.addEventListener("click",()=>{
            //se recupera valor de los datos 
            nombre.value = element.nombre;
            correo.value = element.correo;
            contrasenia.value = element.contrasenia;
            numero.value = element.numero;
            cumpleanios.value = element.cumpleanios;
            lenguaje.value = element.lenguaje;
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById('btnEditar');
            //se llama a la funcion modificar al dar click al boton para poder editar los datos
            eBtnEditarUp.addEventListener('click',()=>modificar(listadonuevo))
            
            
        })
        //se añade evento listener que al dar click en el boton indicado se llama a una funcion la cual es eliminar los datos y bloquearlos  
        Btn2.addEventListener("click",()=>{
            nombre.value = element.nombre;
            correo.value = element.correo;
            contrasenia.value = element.contrasenia;
            numero.value = element.numero;
            cumpleanios.value = element.cumpleanios;
            lenguaje.value = element.lenguaje;
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar;
            let eBtnEliminarUp = document.getElementById('btnEliminar');
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadonuevo))
            nombre.disabled = "true"
            correo.disabled = "true"
            contrasenia.disabled = "true"
            numero.disabled = "true"
            cumpleanios.disabled = "true"
            lenguaje.disabled = "true"
       
            
        })
        
    }
}
//funcion flecha que recupera datos ingresados para poder registrar los datos 
let registrar = () =>{
    //cada let recupera los datos ingresados en el formulario para registrarlos en el localstorage 
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("email");
    let contrasenia = document.getElementById("contrasenia");
    let numero = document.getElementById("numero");
    let cumpleanios = document.getElementById("cumpleanios");
    let lenguaje = document.getElementById("selector");
    //se recuperan los valores de los datos recuperados anteriormente
    let N = nombre.value;
    let C = correo.value;
    let P = contrasenia.value;
    let N2 = parseInt(numero.value);
    let CUM = cumpleanios.value;
    let L = lenguaje.value;
    let listadopersonas = localStorage.getItem("programadores");
    let listadoantiguo = JSON.parse(listadopersonas);
    //el ciclo verifica si el listado tiene campo null agrega nuevos datos
    if (listadoantiguo==null){
        let programador = {"id":0,"nombre":N,"correo":C,"contrasenia":P,"numero":N2,"cumpleanios":CUM,"lenguaje":L};
        listadonuevo = [programador]
    }
    //si no se completa lo anterior se agregan datos despues de los datos ya existentes 
    else{
        let programador = {"id":listadoantiguo.length,"nombre":N,"correo":C,"contrasenia":P,"numero":N2,"cumpleanios":CUM,"lenguaje":L};
        listadonuevo = [...listadoantiguo,programador]
    }
    //ciclo para verificar los datos ingresados y que el nombre sea valido
    if (nombre.value === ''){
        alert("El nombre es requerido");
        nombre.style.color = "red";
        return false;
    }
    //ciclo para verificar los datos ingresados y que el correo sea valido
    if (correo.value === '') {
        alert("El correo no es valido");
        return false;
    }
    //ciclo para verificar los datos ingresados y que la contraseña sea valida
    if (contrasenia.value === '') {
        alert("Contrasenia requerida");
        return false;
    }
    //ciclo para verificar los datos ingresados y que el numero sea valido
    if (numero.value === '') {
        alert("numero requerido");
        return false;
    }
    
    
    console.log(listadoantiguo);
    console.log(listadonuevo);
    //guarda los datos ingresados en el localstorage
    localStorage.setItem("programadores",JSON.stringify(listadonuevo));
    //carga la tabla para mostrar los datos guardados
    cargarTabla(listadonuevo)

}
//funcion que guarda los datos en el localtorage los transfoma de JSON a string para luego mostrar la tabla con los datos 
var cargasdatos = ()=>{
    let listadopersonas = localStorage.getItem("programadores");
    let listadoantiguo = JSON.parse(listadopersonas);
    cargarTabla(listadoantiguo)
}
//se recupera el id btn para agregarle el evento clicl y registrar
document.getElementById("btn").addEventListener("click",registrar);
//carga los datos para mostrarlos en la tabla
addEventListener('load',cargasdatos)
