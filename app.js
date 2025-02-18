// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo;
let numAmigo;
let listaAmigos = [];
let mostrarLista = document.getElementById('showAmigos');
let resultado = document.getElementById('resultado');
let amigosSorteados = [];

function limpiarListaAmigos(){
    mostrarLista.innerHTML = ""
}

function actualizaLista(){
    for (let i = 0; i < listaAmigos.length; i++) {
        let elemento = document.createElement("li"); // Creamos un elemento <li> para la lista
        elemento.textContent = listaAmigos[i]; // Asignamos el nombre del amigo al elemento <li>
        mostrarLista.appendChild(elemento); // Mostramos el <li> a la lista <ul> para actualizarla
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
        if(numAmigo == amigosSorteados.length){
            alert('Ya no hay más amigos que sortear');
        }
        else{
            indiceSorteado = Math.floor(Math.random()*numAmigo); //Generamos el índice aleatorio para nuestro amigo, no le sumamos el uno porque necesitamso el indice 0
            //console.log(`El numero aleatorio es: ${indiceSorteado}`);
            //console.log(`El amigo secreto es: ${listaAmigos[indiceSorteado]}`);
            resultado.innerHTML = `El amigo secreto es ${listaAmigos[indiceSorteado]}`;
            //Si el amigo ya salió, llamar función sortearAmigo, sino
            if(amigosSorteados.includes(indiceSorteado)){
                return sortearAmigo();
            }
            else{//sino agergar al amigo a la lista de amigos sorteados y regresar el índice para seguir
                amigosSorteados.push(indiceSorteado);//Guardar el amigo sorteado
                return indiceSorteado;
            }
        }
        
    }
    else{
        alert(`No has añadido amigos aún`);
    }

    
}
