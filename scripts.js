// JavaScript pour gérer l'ouverture et la fermeture de la modal

// Sélectionne le bouton pour ouvrir la modal
var openGuideBtn = document.getElementById('openGuideBtn');

// Sélectionne la modal et le bouton de fermeture
var guideModal = document.getElementById('guideModal');
var closeBtn = document.getElementsByClassName('close')[0];

// Fonction pour ouvrir la modal
openGuideBtn.onclick = function() {
    guideModal.style.display = 'block';
}

// Fonction pour fermer la modal lorsqu'on clique sur le bouton de fermeture
closeBtn.onclick = function() {
    guideModal.style.display = 'none';
}

// Ferme la modal si l'utilisateur clique en dehors de la modal
window.onclick = function(event) {
    if (event.target == guideModal) {
        guideModal.style.display = 'none';
    }
}
