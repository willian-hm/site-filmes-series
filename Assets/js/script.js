const slides = document.querySelectorAll(".slide");
const anterior = document.querySelector(".anterior");
const proximo = document.querySelector(".proximo");
let indiceAtual = 0;

function mostrarSlide(index) {
  const container = document.querySelector(".slides-container");
  container.style.transform = `translateX(-${index * 100}%)`;
}

anterior.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
  mostrarSlide(indiceAtual);
});

proximo.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % slides.length;
  mostrarSlide(indiceAtual);
});

// Slide automático a cada 5 segundos
setInterval(() => {
  proximo.click();
}, 5000);
