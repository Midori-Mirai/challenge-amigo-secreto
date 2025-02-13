// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo;
let numAmigo;
let listaAmigos = [];
let mostrarLista = document.getElementById('showAmigos');
let resultado = document.getElementById('resultado');

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
    //Guardamos cuantos amigos tenemos para poder generar el índice aleatorio
    numAmigo = listaAmigos.length;
    console.log(`tienes ${numAmigo} ${(numAmigo == 1) ? 'amigo' : 'amigos'}`)
    if(numAmigo !=0){
        indiceSorteado = Math.floor(Math.random()*numAmigo)+1; //Generamos el índice aleatorio
        console.log(`El numero aleatorio es: ${indiceSorteado}`);
        console.log(`El amigo secreto es: ${listaAmigos[indiceSorteado-1]}`);
        resultado.innerHTML = `El amigo secreto es ${listaAmigos[indiceSorteado-1]}`;
    }
    else{
        alert(`No has añadido amigos aún`);
    }

    
}

