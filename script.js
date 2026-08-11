document.getElementById("año").textContent = new Date().getFullYear();

const texto = "¡Bienvenido a nuestro sitio!";
let i = 0;

function escribir() {
  if (i < texto.length) {
    document.getElementById("typing").textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 40);
  }
}
window.onload = escribir;

const elementos = document.querySelectorAll(".revela");
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

elementos.forEach((el) => observer.observe(el));

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
});

if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
  document.querySelector(".fondo").style.backgroundAttachment = "scroll";
}
window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());

   gtag('config', 'G-R1LQ51HHBF');