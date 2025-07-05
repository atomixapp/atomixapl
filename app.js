const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  index = i;
  slides.style.transform = `translateX(-${i * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

setInterval(() => {
  index = (index + 1) % dots.length;
  showSlide(index);
}, 4000); // Cambia cada 4 segundos
