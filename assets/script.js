document.addEventListener("DOMContentLoaded", function () {
  const navbarMain = document.getElementById("navbarMain");
  const menuText = document.getElementById("menuText");
  const navbarContent = document.getElementById("navbarContent");

  // Fonction pour fermer le menu
  function closeMenu() {
    menuText.textContent = "MENU";
    navbarContent.classList.remove("show");
  }

  // Gestionnaire de clic pour le bouton du menu
  navbarMain.addEventListener("click", function (e) {
    e.preventDefault();
    if (menuText.textContent === "MENU") {
      menuText.textContent = "CLOSE";
      navbarContent.classList.add("show");
    } else {
      closeMenu();
    }
  });

  // Fermer le menu quand on clique en dehors
  document.addEventListener("click", function (e) {
    if (!navbarMain.contains(e.target) && !navbarContent.contains(e.target)) {
      closeMenu();
    }
  });

  // Fermer le menu quand on clique sur un lien
  navbarContent.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonDown = document.querySelector(".buttonDown");
  const containerOne = document.querySelector(".containerOne");
  const line = document.querySelector(".line");

  buttonDown.addEventListener("click", function () {
    // Toggle les classes active
    containerOne.classList.toggle("active");
    line.classList.toggle("active");
    buttonDown.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectElements = document.querySelectorAll(".projectAll");

  projectElements.forEach((projectElement) => {
    projectElement.addEventListener("click", function () {
      this.classList.toggle("expanded");
    });
  });
});
// Ajouter ce code à la fin de ton fichier script.js

// Validation du formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Récupérer les valeurs du formulaire
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Validation simple
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
      }

      // Validation de l'email avec une expression régulière simple
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }

      // Simulation d'envoi du formulaire (à remplacer par ton système d'envoi réel)
      const submitButton = document.querySelector(".submitButton");
      const originalButtonText = submitButton.innerHTML;

      submitButton.innerHTML = "ENVOI EN COURS...";
      submitButton.disabled = true;

      // Simuler un délai d'envoi (à remplacer par ton appel API réel)
      setTimeout(function () {
        alert("Merci ! Votre message a été envoyé avec succès.");
        contactForm.reset();
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      }, 1500);
    });
  }
});
