document.querySelectorAll('.carousel-wrapper').forEach(wrapper=>{
  const container = wrapper.querySelector('.carousel-container');
  const prev = wrapper.querySelector('.arrow.left');
  const next = wrapper.querySelector('.arrow.right');

  const scrollByWidth = () => container.clientWidth - 40; // 40 = margen flechas

  prev.addEventListener('click', () =>{
    container.scrollBy({ left: -scrollByWidth(), behavior: 'smooth' });
  });
  next.addEventListener('click', () =>{
    container.scrollBy({ left:  scrollByWidth(), behavior: 'smooth' });
  });
});
