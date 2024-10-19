const galleryItems = document.querySelectorAll(".gallery.item");
const lightbox = document.querySelectorAll(".lightbox");
const lightboxImage = document.querySelectorAll(".lightbox-image");
const lightboxClose = document.querySelectorAll(".lightbox.close");

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const imageUrl = item
        .querySelector(".gellery-image")
        .getAttribute("data-src");
        lightboxImage.setAttribute("src", imageUrl);
        lightbox.style.display = "flex";
    });    
})

lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
})