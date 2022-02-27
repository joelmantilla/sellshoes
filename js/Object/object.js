
/* agregar objeto */

const lista = [];

function agregar() {
    const imputNombre = document.getElementById("nombre");
    const imputApellido = document.getElementById("apellido");
    const imputEmail = document.getElementById("email");
    const imputAsunto = document.getElementById("asunto");

    const nombre = imputNombre.value;
    const apellido = imputApellido.value;
    const email = imputEmail.value;
    const asunto = imputAsunto.value;
    
    




    const archivo = document.createElement("li");
    archivo.classList.add("archivo");
    archivo.innerHTML =
        `
    

       <hr>
       <p>Nombre: ${nombre}<p><hr>
       <p>Apellido:${apellido}<p><hr>
       <p>Email: ${email}<p><hr>
       <p>Asunto:  ${asunto}<p><hr>
       
   `;    
       


    lista.push({
        nombre:nombre,
        apellido:apellido,
        email:email,
        asunto:asunto,
        
    })

    $("#btn--eliminar").click(function(){
        $("li").remove();
    });



    listado.appendChild(archivo);

    /* GUARDAR DATOS AL STORAGE */
    localStorage.setItem('archivo',JSON.stringify(lista));

}



