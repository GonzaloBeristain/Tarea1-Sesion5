class Persona {
    constructor (nombre, email, telefono, trabajo, sobreti){
        this.nombre = nombre;
        this.email = email;
        this.trabajo = trabajo;
        this.telefono = telefono;
        this.sobreti = sobreti;
    }
}

let boton = document.getElementById("boton");

let rellenar = (event) => {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let trabajo = document.getElementById("trabajo").value;
    let telefono = document.getElementById("telefono").value;
    let sobreti = document.getElementById("sobreti").value;
    let nuevaPersona = new Persona(nombre, email, telefono, trabajo,  sobreti);

    document.getElementById("nombreCarta").innerText = nuevaPersona.nombre;
    document.getElementById("trabajoCarta").innerText = nuevaPersona.trabajo;
    document.getElementById("emailCarta").innerText= nuevaPersona.email;
    document.getElementById("telefonoCarta").innerText = nuevaPersona.telefono;
    document.getElementById("sobremiCarta").innerText = nuevaPersona.sobreti;
}

boton.addEventListener("click", rellenar)