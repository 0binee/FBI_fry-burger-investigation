document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 필요한 요소들 가져오기 (이름이 새 HTML에 맞게 변경됨)
    const modal = document.getElementById("documentModal"); 
    const modalImage = document.getElementById("modalImage"); 
    const modalTitle = document.getElementById("modalTitle"); 
    const modalDesc = document.getElementById("modalDescription"); 
    const closeBtn = document.querySelector(".close-btn"); 
    const evidenceImages = document.querySelectorAll('.evidence-img'); 

    // 2. 각 증거물 이미지에 클릭 이벤트 연결
    evidenceImages.forEach(function(img) {
        img.addEventListener('click', function() {
            // ★ 여기가 핵심! HTML에 적어둔 data- 값을 가져오는 마법의 코드 ★
            const imgSrc = this.src;
            const titleText = this.getAttribute('data-title');
            const descText = this.getAttribute('data-desc');

            // 가져온 값을 모달창 안의 태그들에 쏙쏙 집어넣기
            modalImage.src = imgSrc;
            modalTitle.textContent = titleText ? titleText : "증거물 정보 없음";
            modalDesc.textContent = descText ? descText : "설명이 없습니다.";

            // 모달 창 띄우기 (flex로 보이게 함)
            modal.style.display = "flex";
        });
    });

    // 3. X 버튼 클릭 시 닫기
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }

    // 4. 배경(검은 부분) 클릭 시 닫기
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

/* =========================
   범인 선택 기능
========================= */

const openCulprit = document.getElementById("openCulprit");
const culpritModal = document.getElementById("culpritModal");
const resultModal = document.getElementById("resultModal");
const resultText = document.getElementById("resultText");

const closeCulprit = document.querySelector(".close-culprit");
const closeResult = document.querySelector(".close-result");

if (openCulprit) {
    openCulprit.addEventListener("click", function(e) {
        e.preventDefault();
        culpritModal.style.display = "flex";
    });
}

if (closeCulprit) {
    closeCulprit.addEventListener("click", function() {
        culpritModal.style.display = "none";
    });
}

if (closeResult) {
    closeResult.addEventListener("click", function() {
        resultModal.style.display = "none";
    });
}

/* 배경 클릭 → cheese 시작으로 이동 */
culpritModal.addEventListener("click", function(e) {
    if (e.target === culpritModal) {
        window.location.href = "index.html";
    }
});

/* 용의자 이미지 */
const suspects = document.querySelectorAll(".suspect");

suspects.forEach(function(img) {

    img.addEventListener("mouseenter", function() {
        img.src = img.src.replace("_in", "_col");
    });

    img.addEventListener("mouseleave", function() {
        img.src = img.src.replace("_col", "_in");
    });

    img.addEventListener("click", function(e) {

        e.stopPropagation();

        culpritModal.style.display = "none";
        resultModal.style.display = "flex";

        if (img.dataset.culprit === "true") {
            resultText.innerText =
                img.dataset.name + "은 이번 사건의 범인입니다.";
        } else {
            resultText.innerText =
                "수사에 도움을 주셔서 감사합니다.";
        }

        resultModal.style.display = "flex";
        culpritModal.style.display = "none";
    });
});

});