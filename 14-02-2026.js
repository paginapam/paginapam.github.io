// --- CONFIGURACIÓN INICIAL ---

// 1. TEXTO DE BIENVENIDA (Máquina de escribir)
// Puedes cambiar el mensaje entre las comillas. \n significa "salto de línea".
const welcomeMessage =
  "Hola mi amor ❤️\nHe programado este pequeño espacio\npara recordarte lo increíble que eres.\n¡Feliz San Valentín!";

// 2. LISTA DE RAZONES (La base de datos del amor)
const reasonsArray = [
  // --- ROMÁNTICAS ---
  "Por la forma en que tus ojos brillan cuando te ríes.",
  "Por cómo me apoyas en mis locuras y proyectos.",
  "Por los abrazos que reinician mi día cuando estoy estresado.",
  "Porque haces que los días grises tengan color.",
  "Por la paz que siento cuando estoy a tu lado.",
  "Porque eres mi lugar seguro en el mundo.",
  "Porque contigo siento que el tiempo se detiene.",
  "Por tu paciencia infinita conmigo.",
  "Porque eres lo primero que pienso al despertar y lo último al dormir.",
  "Por la forma en que me cuidas sin darte cuenta.",
  "Porque incluso en silencio, estar contigo es perfecto.",
  "Porque te ves preciosa cuando te concentras en algo.",
  "Porque aunque te enojes, sigues siendo linda.",

  // --- FUTURO Y SENTIMIENTOS ---
  "Porque no me imagino un futuro donde no estés tú.",
  "Porque eres mi hogar, sin importar dónde estemos.",
  "Porque me das paz en medio del caos.",
  "Porque cada día a tu lado es un regalo.",
  "Porque me enseñaste lo que es el amor bonito y sano.",
  "Porque eres mi equipo, mi socia y mi todo.",

  // --- DIVERTIDAS ---
  "Porque me aguantas incluso caundo estoy de malas.",
  "Porque eres la única persona con la que compartiría mi comida (a veces ajaj).",
  "Por tus chistes, que aunque sean malos, me hacen reír.",
  "Porque eres mi compañera de vida.",
  "Porque te ves hermosa incluso recién levantada y despeinada.",
  "Porque eres la reina de los vidios de yutu",
  "Porque eres buenisima jugando cualquier cosa",
  "Porque te gusta las perdidas jasja",
  "Porque soportas mis explicaciones largas sobre tecnología.",
  "Por cómo me apoyas en mis locuras de programación.",

  // --- AGREGA AQUÍ LAS TUYAS PROPIAS ---
  "Simplemente, porque eres tú.",
  "Por cómo nos entendemos con solo mirarnos.",
  "Por amo como miras a la luna.",
];

// --- LÓGICA DEL CÓDIGO (No hace falta tocar nada abajo) ---

// 1. MÁQUINA DE ESCRIBIR
const typewriterElement = document.getElementById("typewriter-text");
let charIndex = 0;

function typeWriterEffect() {
  if (charIndex < welcomeMessage.length) {
    if (welcomeMessage.charAt(charIndex) === "\n") {
      typewriterElement.innerHTML += "<br>";
    } else {
      typewriterElement.innerHTML += welcomeMessage.charAt(charIndex);
    }
    charIndex++;
    setTimeout(typeWriterEffect, 80); // Velocidad de escritura
  }
}

// 2. GENERADOR DE RAZONES
const generateBtn = document.getElementById("generate-btn");
const reasonDisplay = document.getElementById("reason-display");

generateBtn.addEventListener("click", () => {
  // Desvanecer texto actual
  reasonDisplay.style.opacity = 0;

  setTimeout(() => {
    // Elegir razón aleatoria
    const randomIndex = Math.floor(Math.random() * reasonsArray.length);
    const selectedReason = reasonsArray[randomIndex];

    // Mostrar nueva razón
    reasonDisplay.textContent = `"${selectedReason}"`;

    // Reaparecer texto
    reasonDisplay.style.opacity = 1;
  }, 300);
});

// Estilo de transición para el texto
reasonDisplay.style.transition = "opacity 0.3s ease";

// 3. CAMBIO DE TEMA (CLARO/OSCURO)
const themeToggleBtn = document.getElementById("theme-toggle");
const bodyElement = document.body;

// Recuperar tema guardado si existe
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  bodyElement.setAttribute("data-theme", currentTheme);
  updateToggleIcon(currentTheme);
}

themeToggleBtn.addEventListener("click", () => {
  if (bodyElement.getAttribute("data-theme") === "dark") {
    bodyElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    updateToggleIcon("light");
  } else {
    bodyElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    updateToggleIcon("dark");
  }
});

function updateToggleIcon(theme) {
  themeToggleBtn.textContent = theme === "dark" ? "☀️" : "🌓";
}

// --- FUNCIONALIDAD 4: ENVIAR RECUERDO POR WHATSAPP ---
const sendBtn = document.getElementById("send-whatsapp-btn");
const memoryInput = document.getElementById("memory-input");

// REEMPLAZA: Pon aquí tu número de teléfono con código de país (ej: 521...)
// Sin espacios ni guiones. Ejemplo México: 5219991234567
const myPhoneNumber = "521NUMEROAQUI";

sendBtn.addEventListener("click", () => {
  const memory = memoryInput.value;

  if (memory.trim() === "") {
    alert("¡Escribe un recuerdo bonito primero! 😉");
    return;
  }

  // Crear el mensaje para WhatsApp
  // %0A es un salto de línea en código URL
  const message = `Hola amor ❤️, me acordé de este momento y quiero que lo guardemos:%0A%0A"${memory}"`;

  // Crear el link de WhatsApp
  const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${message}`;

  // Abrir WhatsApp en una nueva pestaña
  window.open(whatsappUrl, "_blank");
});
// Iniciar al cargar
window.onload = typeWriterEffect;
