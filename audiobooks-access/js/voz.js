/* SOPORTE */
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Tu navegador no soporta reconocimiento de voz");
}

const reconocimiento = new SpeechRecognition();
reconocimiento.lang = "es-ES";
reconocimiento.continuous = false;

/* 🔊 HABLAR (CON CONTROL DE FIN) */
function hablar(texto, callback) {

  window.speechSynthesis.cancel(); // evita conflictos

  let speech = new SpeechSynthesisUtterance(texto);
  speech.lang = "es-ES";
  speech.rate = 1;

  speech.onend = () => {
    if (callback) callback();
  };

  window.speechSynthesis.speak(speech);
}

/* 🎤 ESCUCHAR (INDEX) */
window.escuchar = function () {

  hablar("Escoge un curso: matemática, historia, ciencia o inglés", () => {
    reconocimiento.start();
  });

};

/*  RESULTADO */
reconocimiento.onresult = function(event) {

  let texto = event.results[0][0].transcript.toLowerCase();

  console.log("Dijiste:", texto);

  /* 🔥 CURSOS */
  if (texto.includes("matemática") || texto.includes("matematica")) {

    hablar("Abriendo curso de matemática", () => {

    localStorage.setItem("busquedaVoz", "matematica");

    setTimeout(() => {
        window.location.assign("pages/buscar.html");
    }, 300); // pequeña espera

    });

  }

  else if (texto.includes("historia")) {

    hablar("Abriendo curso de historia", () => {

  localStorage.setItem("busquedaVoz", "historia");

  setTimeout(() => {
    window.location.assign("pages/buscar.html");
  }, 300); // pequeña espera

});

  }

  else if (texto.includes("ciencia")) {

    hablar("Abriendo curso de ciencia", () => {

  localStorage.setItem("busquedaVoz", "ciencia");

  setTimeout(() => {
    window.location.assign("pages/buscar.html");
  }, 300); // pequeña espera

});

  }

  else if (texto.includes("inglés") || texto.includes("ingles")) {

    hablar("Abriendo curso de inglés", () => {

  localStorage.setItem("busquedaVoz", "ingles");

  setTimeout(() => {
    window.location.assign("pages/buscar.html");
  }, 300); // pequeña espera

});

  }

  /* OTROS COMANDOS */
  else if (texto.includes("configuración") || texto.includes("configuracion")) {

    hablar("Abriendo configuración", () => {
      window.location.href = "pages/config.html";
    });

  }

  else if (texto.includes("admin")) {

    hablar("Entrando al administrador", () => {
      window.location.href = "pages/admin.html";
    });

  }

  else {

    hablar("No entendí, intenta nuevamente");

  }

};

/* ERRORES */
reconocimiento.onerror = function(e) {
  console.error("Error:", e);
  hablar("Hubo un problema con el micrófono");
};