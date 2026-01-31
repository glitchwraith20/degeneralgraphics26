const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("Lightbox-img");

document.querySelectorAll(".image-item img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});