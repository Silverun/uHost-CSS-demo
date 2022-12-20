const backdrop = document.querySelector(".backdrop");

const modal = document.querySelector(".modal");

const selectPlanButtons = document.querySelectorAll(".plan button");

const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const noButton = document.querySelector(".modal__actions button");
const ctaButton = document.querySelector(".main-nav__item--cta");

selectPlanButtons.forEach((e) => {
  e.addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);
  });
});

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 500);
}

if (noButton) {
  noButton.addEventListener("click", () => {
    closeModal();
  });
}

backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");

  closeModal();
});

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");

  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

ctaButton.addEventListener("animationstart", (e) => console.log("started", e));
ctaButton.addEventListener("animationend", (e) => console.log("end", e));
ctaButton.addEventListener("animationiteration", (e) =>
  console.log("iteration", e)
);
