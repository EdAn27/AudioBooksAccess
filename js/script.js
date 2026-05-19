function guardarLibro() {
  const nombre = document.querySelector('input[type="text"]').value;
  const archivo = document.querySelector('input[type="file"]').files[0];

  if (!nombre || !archivo) {
    alert("Completa todos los campos");
    return;
  }

  const reader = new FileReader();

  reader.onload = function(e) {
    let libros = JSON.parse(localStorage.getItem("libros")) || [];

    libros.push({
      nombre: nombre,
      contenido: e.target.result 
    });

    localStorage.setItem("libros", JSON.stringify(libros));

    alert("Libro guardado ✅");
    mostrarLibrosAdmin();
  };

  reader.readAsText(archivo); 
}