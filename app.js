// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array para almacenar los nombres

// Función para añadir un amigo a la lista
function amigoSecreto() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpiar campo
    actualizarLista(); // Actualizar la lista en pantalla
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(li);
    });
}

// Función para sortear 1 amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoAleatorio);
}

// Función para mostrar el resultado en pantalla
function mostrarResultado(amigo) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar antes de mostrar

    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigo} 🎉`;
    resultadoLista.appendChild(li);
}



// Función para resetear el sorteo
function resetearSorteo() {
    amigos = []; // Vaciar el array de amigos

    // Limpiar la lista de amigos en pantalla
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Limpiar el resultado del sorteo anterior
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    // Opcional: Limpiar el campo de entrada de texto
    document.getElementById("amigo").value = "";

    // Mensaje opcional para confirmar el reinicio
    alert("El sorteo ha sido reiniciado. Puedes comenzar de nuevo.");
}

