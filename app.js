// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo;
let numAmigo;
let listaAmigos = [];
let mostrarLista = document.getElementById('showAmigos');

function limpiarListaAmigos(){
    mostrarLista.innerHTML = ""
}

function actualizaLista(){
    for (let i = 0; i < listaAmigos.length; i++) {
        let elemento = document.createElement("li"); // Crear un elemento <li>
        elemento.textContent = listaAmigos[i]; // Asignar el nombre del amigo
        mostrarLista.appendChild(elemento); // Agregar el <li> a la lista <ul>
    }
    
}

function agregarAmigo(){
    nombreAmigo = document.getElementById('amigo').value;
    //Verifica si el campo tiene un nombre válido
    if(nombreAmigo != ""){
        listaAmigos.push(nombreAmigo);
        document.querySelector('#amigo').value="";
        console.log(`lista: ${listaAmigos}`)
        limpiarListaAmigos();
        actualizaLista();
    }
    else{
        alert('Debes ingresar un nombre valido');
    }
    return;
}

function sortearAmigo(){
    numAmigo = listaAmigos.length;
    console.log(`tienes ${numAmigo} ${(numAmigo == 1) ? 'amigo' : 'amigos'}`)
    
}

