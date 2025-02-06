document.addEventListener("DOMContentLoaded", function () {
    const navbarMain = document.getElementById("navbarMain");
    const menuText = document.getElementById("menuText");
    const navbarContent = document.getElementById("navbarContent");

    navbarMain.addEventListener("click", function () {
        // Bascule le texte MENU <=> CLOSE
        if (menuText.textContent === "MENU") {
            menuText.textContent = "CLOSE";
            navbarContent.classList.add("show"); // Ajoute la classe pour afficher avec animation
        } else {
            menuText.textContent = "MENU";
            navbarContent.classList.remove("show"); // Retire la classe pour masquer
        }
    });
});

// Sélectionner les éléments
const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-container img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

// Variables pour le suivi
let currentIndex = 0;

// Fonction pour mettre à jour la position
function updateCarousel() {
    const width = images[0].clientWidth; // Largeur d'une image
    carouselContainer.style.transform = `translateX(-${currentIndex * width}px)`; // Déplace le conteneur
}

// Écouteurs pour les boutons
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Revenir au début
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Aller à la dernière image
    }
    updateCarousel();
});

// Mettre à jour au chargement
window.addEventListener('resize', updateCarousel);
updateCarousel();
