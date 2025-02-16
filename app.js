// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = ['Alex', "Axel","Juan"];
let nuevoNombre ;
let amigoSorteado;

console.log(nombres);

function agregarAmigo(){
    nuevoNombre=document.getElementById('amigo').value;
    nombres.push(nuevoNombre);
    console.log(nombres);
    /*
    while (contador < nombres.length)
    {
        mostrarAmigos(nombres[contador]);
        contador++;
    }
        */       
    mostrarAmigos(nombres);
    limpiarCajaTexto();
    return(nuevoNombre);
}
/*
function actualizarAmigos(){
    mostrarAmigos();
}
*/
function sortearAmigo(){
    amigoSorteado = nombres[Math.floor(Math.random()*nombres.length)];
    let elementoTextoHTML = document.getElementById("resultado");
    elementoTextoHTML.innerHTML = amigoSorteado ;
    console.log(amigoSorteado);
    return amigoSorteado;
}

function mostrarAmigos(nombres){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    let listaHTML = "";
    let contador = 0;
    while (contador < nombres.length) {
        listaHTML += `<li>${nombres[contador]}</li>`;
        contador++;
    }
    listaAmigos.innerHTML = listaHTML;
}

function limpiarCajaTexto(){
    document.getElementById('amigo').value="";    
}