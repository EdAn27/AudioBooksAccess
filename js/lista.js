import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

async function cargarLibros() {

  const contenedor = document.getElementById("listaLibros");

  const querySnapshot = await getDocs(collection(db, "libros"));

  querySnapshot.forEach(doc => {

    const libro = doc.data();

    let div = document.createElement("div");

    div.innerHTML = libro.nombre;

    div.onclick = () => {
      localStorage.setItem("libroSeleccionado", JSON.stringify(libro));
      window.location.href = "reproducir.html";
    };

    contenedor.appendChild(div);

  });
}

cargarLibros();