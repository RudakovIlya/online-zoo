"use strict";

const createpopUp = document.createElement("div");
const body = document.querySelector("body");
const testiSlide = document.querySelectorAll(".testimonials__slide");
const darkBackground = document.querySelector(".dark-background");
createpopUp.classList.add("pop-up");

function attachListener() {
  document.addEventListener("click", handleClick);
}

function detachListener() {
  document.removeEventListener("click", handleClick);
}

function handleClick(e) {
  const target = e.target;

  testiSlide.forEach((item, i) => {
    body.append(createpopUp);
    if (target.closest(".testimonials__slide") == item) {
      const copySlide = item.cloneNode(true);

      createpopUp.innerHTML = '<span class="pop-up__span">&#10006;</span>';

      createpopUp.append(copySlide);

      darkBackground.classList.add("_active");

      createpopUp.classList.add("show");

      body.classList.add("lock");
    }
    if (
      (createpopUp && createpopUp.classList.contains("show") && target == darkBackground) ||
      window.innerWidth > 640 ||
      target.closest(".pop-up__span")
    ) {
      darkBackground.classList.remove("_active");
      createpopUp.classList.remove("show");
      body.classList.remove("lock");
      createpopUp.innerHTML = "";
      createpopUp.remove();
    }
  });
}

function windowResize() {
  if (window.matchMedia("(max-width: 640px)").matches || window.innerWidth <= 640) {
    attachListener();
  } else {
    detachListener();
  }
}

windowResize();
