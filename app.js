// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//document.getElementById('sortear').setAttribute('disabled','true');
//document.querySelector('#sortear').setAttribute('disabled','true');

function agregarAmigo(){
    let nombreIngresado = document.querySelector('input').value;
    //let nombresValidos = /^[A-Za-z]+$/;
    if (nombreIngresado != /^[A-Za-z]+$/.test(nombreIngresado)){
        amigos.push(nombreIngresado);
        actualizarListaAmigos();
    } else {
        alert("Por favor inserte un nombre");
    }
    if(amigos.length >= 2){
        desocultar();
    }
    limpiarCaja();
    console.log(amigos);
    //actualizarListaAmigos();
    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function actualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    let nuevoLi = document.createElement('li');

    for (var i = 0; i <= amigos.length-1; i++){
        //listaAmigos.innerHTML = amigos[i];
        nuevoLi.innerHTML = amigos[i];
        listaAmigos.appendChild(nuevoLi);
    }
}

function sortearAmigos(){
    if (amigos.length >= 2){
        let posicionSorteada = Math.floor(Math.random()*amigos.length-1);
        let nombreFinal = document.getElementById('resultado');
        nombreFinal.innerHTML = amigos[posicionSorteada];
    }
}

function desocultar(){
    const divContenedor = document.querySelector('.button-container');
        divContenedor.hidden= false;
        //document.querySelector('#sortear').setAttribute('hidden','false');
}