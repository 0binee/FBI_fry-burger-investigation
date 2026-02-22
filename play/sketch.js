function resizeGame() {
  const game = document.getElementById("game");
  const scale = Math.min(
    window.innerWidth / 1920,
    window.innerHeight / 1080
  );
  game.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", resizeGame);
resizeGame();

document.addEventListener("DOMContentLoaded", () => {

  let currentIndex = 0;

  const slider = document.querySelector(".illusts");
  const slides = document.querySelectorAll(
    ".slide1, .slide2, .slide3"
  );
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");
  const selectBtn = document.querySelector(".select-btn"); // 🔥 추가

  function updateSlide() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  });

  leftBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  });

  const pages = [
    "../cheese/index.html",
    "../milkshake/index.html",
    "../icecream/index.html"
  ];

  selectBtn.addEventListener("click", () => {
    window.location.href = pages[currentIndex];
  });

});