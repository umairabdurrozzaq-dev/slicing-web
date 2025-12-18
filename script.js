 // NAVBAR TOGGLE
  const toggle = document.getElementById("menu-toggle");
  const menu   = document.getElementById("main-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("animate-slide");
  });

  // CAROUSEL
  const carousel = document.getElementById("carousel");
  const total = carousel.children.length;
  let index = 0;

  function update() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById("next").onclick = () => {
    index = (index + 1) % total;
    update();
  };

  document.getElementById("prev").onclick = () => {
    index = (index - 1 + total) % total;
    update();
  };

  setInterval(() => {
    index = (index + 1) % total;
    update();
  }, 3500);