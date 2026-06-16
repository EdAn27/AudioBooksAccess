# AudioBooks Access

AudioBooks Access es una aplicación web desarrollada para facilitar el acceso a contenido educativo mediante audiolibros y herramientas de accesibilidad. El sistema está orientado principalmente a estudiantes con discapacidad visual o dificultades de lectura, permitiendo interactuar con la plataforma mediante comandos de voz y reproducción automática de texto.

---

# Características principales

- Reproducción de audiolibros mediante síntesis de voz
- Reconocimiento de comandos de voz
- Navegación por voz
- Configuración accesible
- Cambio de tamaño de letra
- Personalización de idioma y velocidad
- Interfaz adaptable
- Panel administrador de libros
- Guardado de configuraciones mediante LocalStorage

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- SpeechSynthesis API (texto a voz)
- SpeechRecognition API (voz a texto)
- Firebase Firestore (base de datos)
- GitHub RAW (almacenamiento de libros)
- LocalStorage

---

# Arquitectura del sistema

El sistema se basa en la integración de servicios web y APIs que permiten la gestión, acceso y reproducción de contenido mediante voz.

## Firebase Firestore

Se utiliza para almacenar información relacionada con los libros:

- nombre del libro
- categoría
- URL del archivo

---

## GitHub RAW

Se utiliza para almacenar los archivos `.txt` que contienen el contenido de los libros.

---

## Frontend Web

La interfaz web permite:

- interacción mediante comandos de voz
- reproducción del contenido
- configuración de accesibilidad
- navegación entre categorías y libros

---

# Flujo de funcionamiento

1. El usuario realiza un comando de voz
2. El sistema reconoce la categoría solicitada
3. Se consulta la base de datos en Firebase
4. Se muestran los libros disponibles
5. El usuario selecciona un libro
6. El sistema obtiene el texto desde GitHub RAW
7. El contenido es reproducido mediante síntesis de voz

---

# Estructura del proyecto

```bash
AudioBooksAccess-actualizacion-1.0/
│
├── index.html
│
├── assets/
│   ├── fondo.png
│   ├── logo.png
│
├── css/
│   ├── admin.css
│   ├── buscar.css
│   ├── config.css
│   ├── lista.css
│   ├── reproducir.css
│   ├── style.css
│
├── js/
│   ├── admin.js
│   ├── firebase.js
│   ├── lista.js
│   ├── script.js
│   ├── voz.js
│
├── pages/
│   ├── admin.html
│   ├── buscar.html
│   ├── config.html
│   ├── reproducir.html
│   ├── lista.html
```

---

# Funcionalidades implementadas

## Reproducción automática

El sistema convierte texto en audio mediante SpeechSynthesis API para permitir la lectura automática del contenido.

---

## Reconocimiento de voz

Permite controlar ciertas funciones del sistema mediante comandos hablados.

---

## Configuración accesible

Los usuarios pueden modificar:

- tamaño de letra
- idioma
- velocidad de reproducción
- tipo de voz

Las configuraciones se almacenan mediante LocalStorage.

---

# Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio

```bash
git clone https://github.com/EdAn27/REPOSITORIO.git
```

2. Abrir el proyecto en Visual Studio Code

3. Ejecutar el archivo `index.html`

---

# Integrantes

- Flores Principe Eddy
- Camila Borja Zegarra
- George Cuycapusa Echavarria

---

# Curso

Interacción Hombre Máquina

---

# Objetivo del proyecto

Desarrollar una plataforma web accesible que permita a estudiantes con discapacidad visual o dificultades de lectura acceder a contenido educativo mediante herramientas de voz y accesibilidad digital.

---

# Accesibilidad

El proyecto fue desarrollado considerando principios de accesibilidad e inclusión digital, incorporando herramientas que facilitan la interacción para usuarios con discapacidad visual.

---

# Licencia

Proyecto académico desarrollado con fines educativos.
