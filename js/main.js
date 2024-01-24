import { galleryItems } from "./app.js";

const gallery = document.querySelector(".foto");
const modalImg = document.querySelector(".image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const lighboxOverlay = document.querySelector(".lightbox-overlay");

galleryItems.forEach((item) => {
    gallery.insertAdjacentHTML("beforeend", `<li class="items">
  <a class="links" href="${item.original}">
    <img class="gallery-image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
  </a>
</li>`)
})

gallery.addEventListener("click", imageChooser);
closeButton.addEventListener("click", closeModal);
lighboxOverlay.addEventListener("click", (e) => {
    if (e.target === lighboxOverlay) {
        closeModal()
    }
})
document.addEventListener("keydown", (e) => {
    e.preventDefault()
    if (e.code === "Escape") {
        closeModal()
  }
})

function imageChooser(e) {
    e.preventDefault()
    if (e.target !== gallery) {
        let clickedImg = e.target;
        modalImg.src = clickedImg.src;
        modalImg.alt = clickedImg.alt;
        document.body.classList.add("show-modal");
    }
}

function closeModal(e) {
    
    document.body.classList.remove("show-modal");
}