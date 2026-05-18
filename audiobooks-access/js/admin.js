import { db } from "./firebase.js";
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc 
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

function convertirLink(link) {

  // 🔥 SI ES GITHUB RAW → NO TOCAR
  if (link.includes("raw.githubusercontent.com")) {
    return link;
  }

  // 🔥 SI YA ES LINK DRIVE CORRECTO
  if (link.includes("uc?export")) {
    return link;
  }

  // 🔥 CONVERTIR SOLO SI ES DRIVE NORMAL
  if (link.includes("drive.google.com")) {

    let id = link.split("/d/")[1]?.split("/")[0];

    return `https://drive.google.com/uc?export=download&id=${id}`;
  }

  // 🔥 SI NO ES NADA DE ESO
  return link;
}

/* 📤 SUBIR LIBRO */
window.subirLibro = async function () {

  const nombre = document.getElementById("nombreLibro").value;
  const categoria = document.getElementById("categoria").value;
  let link = document.getElementById("linkLibro").value;

  if (!nombre || !link) {
    alert("Completa todos los campos");
    return;
  }

  const url = convertirLink(link);

  try {

    await addDoc(collection(db, "libros"), {
      nombre,
      categoria,
      url
    });

    alert("Libro guardado 🚀");

    document.getElementById("nombreLibro").value = "";
    document.getElementById("linkLibro").value = "";

    cargarLibros();

  } catch (error) {

    console.error(error);
    alert("Error al guardar");

  }
};

/* 📚 MOSTRAR LIBROS */
async function cargarLibros() {

  const lista = document.getElementById("listaLibros");
  lista.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "libros"));

  querySnapshot.forEach(docSnap => {

    const libro = docSnap.data();
    const id = docSnap.id;

    let li = document.createElement("li");

    li.innerHTML = `
      ${libro.nombre}
      <a href="${libro.url}" target="_blank">📖</a>
      <button onclick="eliminarLibro('${id}')">🗑</button>
    `;

    lista.appendChild(li);

  });
}

/* 🗑 ELIMINAR */
window.eliminarLibro = async function(id) {

  if (!confirm("¿Eliminar este libro?")) return;

  await deleteDoc(doc(db, "libros", id));

  alert("Libro eliminado");

  cargarLibros();
};

/* INICIAR */
cargarLibros();