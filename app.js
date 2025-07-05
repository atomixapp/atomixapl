// Auto-focus y navegación horizontal con flechas
window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cards img");
  if (cards.length > 0) cards[0].focus();
});

document.addEventListener("keydown", (e) => {
  const cards = Array.from(document.querySelectorAll(".cards img"));
  const index = cards.indexOf(document.activeElement);

  if (e.key === "ArrowRight") {
    if (index !== -1 && cards[index + 1]) cards[index + 1].focus();
  }
  if (e.key === "ArrowLeft") {
    if (index > 0 && cards[index - 1]) cards[index - 1].focus();
  }
});
