/* CREANDO HTML */

const form = document.getElementById('creando')

form.innerHTML = `

   
    <form id="formulario" action="javascript:agregar()">   
        
        <label for="name"><strong> Ingrese su nombre:</strong></label>
        <input type="text" id="nombre">
        <label for=""><strong>Ingrese su apellido: </strong></label>
        <input type="text" id="apellido">
        <label for="email"><strong>Ingrese su E-mail</strong></label>
        <input type="email" id="email">
        <label for=""><strong>Asunto</strong></label>
        <input type="text" height: 50px; id="asunto">
        <br>
        <input type="submit" id="btn--agregar" click="agregar()" value="agregar"</input>
        <br>
        <input type="button" id="btn--eliminar" click="eliminar()" value="eliminar lista"</input>
        
    </form>
`;


