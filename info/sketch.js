document.getElementById("nextBtn").addEventListener("click", () => {
  window.location.href = "../play/index.html";
});


// 🔻 광고 배너 제어 코드 (밖에 있어야 함)
document.addEventListener("DOMContentLoaded", () => {

  const adThumb = document.getElementById("adThumb");
  const adModal = document.getElementById("adModal");
  const adClose = document.getElementById("adClose");

  adThumb.addEventListener("click", () => {
    adModal.classList.add("show");
  });

  adClose.addEventListener("click", () => {
    adModal.classList.remove("show");
  });

  // 배경 클릭해도 닫히게
  adModal.addEventListener("click", (e) => {
    if (e.target === adModal) {
      adModal.classList.remove("show");
    }
  });
});
