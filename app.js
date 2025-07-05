const carruseles = [
  {
    titulo: "Las decisiones determinan el destino",
    peliculas: [
      { titulo: "Verdad o reto", imagen: "https://image.tmdb.org/t/p/w500/UbbIyltRQbbnVSnbVqTBjmkSRC.jpg" },
      { titulo: "Would You Rather", imagen: "https://image.tmdb.org/t/p/w500/yKIG63pXN89EfbTA7yKpwxAU1rf.jpg" },
      { titulo: "Nerve", imagen: "https://image.tmdb.org/t/p/w500/w6e0XZreiyW4mGlLRHEG8ipff7b.jpg" },
      { titulo: "El hoyo", imagen: "https://image.tmdb.org/t/p/w500/uUdBpr84ceikxTEUe33Ub8XNNKY.jpg" },
      { titulo: "Se7en", imagen: "https://image.tmdb.org/t/p/w500/hozkpRxy8mwQl1lM3hbdAYjEDb6.jpg" },
      { titulo: "The Game", imagen: "https://media.themoviedb.org/t/p/w500/32eZpXEqVb6XEPhcIesWekhqaWZ.jpg" }
    ]
  },
  {
    titulo: "Biografía de Thunder",
    peliculas: [
      { titulo: "Película 1", imagen: "https://image.tmdb.org/t/p/w500/AmzGVKlLvpraNAXxPYUROiN2Ulj.jpg" },
      { titulo: "Película 2", imagen: "https://image.tmdb.org/t/p/w500/2rovpt08A266rqRWRzxDlEhJ5Uo.jpg" },
      { titulo: "Película 3", imagen: "https://image.tmdb.org/t/p/w500/jhX4CGHsMHwHuI7vr46jASv5aTJ.jpg" },
      { titulo: "Película 4", imagen: "https://image.tmdb.org/t/p/w500/n12pStK8PT6unFMV2eSrju2eMG5.jpg" }
    ]
  }
];

function crearCarrusel({ titulo, peliculas }) {
  const wrapper = document.createElement("section");
  wrapper.className = "carousel-section";

  wrapper.innerHTML = `
    <h2 class="section-title">${titulo}</h2>
    <div class="carousel-wrapper">
      <button class="arrow left">&#8249;</button>
      <div class="carousel-container">
        ${peliculas.map(p => `
          <div class="card">
            <img src="${p.imagen}" alt="${p.titulo}">
            <p class="card-title">${p.titulo}</p>
          </div>
        `).join('')}
      </div>
      <button class="arrow right">&#8250;</button>
    </div>
  `;

  return wrapper;
}

const contenedor = document.getElementById("carruseles-container");
carruseles.forEach(c => contenedor.appendChild(crearCarrusel(c)));

// Scroll con flechas
document.addEventListener("click", e => {
  if (e.target.classList.contains("arrow")) {
    const container = e.target.closest(".carousel-wrapper").querySelector(".carousel-container");
    const direction = e.target.classList.contains("left") ? -1 : 1;
    const scrollAmount = container.clientWidth - 40;
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  }
});
