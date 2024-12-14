// Attacher l'événement au clic sur le bouton "Envoyer" (formulaire)
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire et le rechargement de la page

    // Récupérer les valeurs du formulaire
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    document.getElementById("userName").textContent = `${prenom} ${nom}`;
    document.getElementById("userName2").textContent = `${prenom} ${nom}`;

    // Masquer le formulaire et afficher le premier conteneur de l'aventure
    showNextStage("newContainer1");
});

// Fonction pour afficher le prochain conteneur et masquer les autres
function showNextStage(stageId) {
    // Masquer tous les conteneurs
    const containers = document.querySelectorAll(".container, .new-container-1, .new-container-2, .new-container-3, .new-container-4, .new-container-5, .new-container-6, .new-container-7, .new-container-8");
    containers.forEach(container => container.style.display = 'none');

    // Afficher le conteneur sélectionné
    const nextContainer = document.getElementById(stageId);
    if (nextContainer) {
        nextContainer.style.display = 'block';
    } else {
        console.error(`Le conteneur avec l'ID ${stageId} n'existe pas.`);
    }
}

// Gérer le choix du sabre
document.getElementById("sabreOption1")?.addEventListener("click", function() {
    showNextStage("newContainer2");  // Aller à la sélection du chemin après avoir choisi le sabre
});

document.getElementById("sabreOption2")?.addEventListener("click", function() {
    showNextStage("newContainer2");  // Aller à la sélection du chemin après avoir choisi le sabre
});

// Gérer le choix du chemin (montagne ou forêt)
document.getElementById("pathOption1")?.addEventListener("click", function() {
    showNextStage("newContainer3"); // Aller au combat contre le démon gardien
});

document.getElementById("pathOption2")?.addEventListener("click", function() {
    showNextStage("newContainer4"); // Aller au combat contre l'araignée géante
});

// Gérer le choix du coup fatal
document.getElementById("SorcierOption")?.addEventListener("click", function() {
    showNextStage("newContainer5"); // Aller à la rencontre avec le sorcier
});

document.getElementById("ArgOption")?.addEventListener("click", function() {
    showNextStage("newContainer5"); // Aller à la rencontre avec le sorcier
});

// Gérer la rencontre avec le sorcier
document.getElementById("PorteOption")?.addEventListener("click", function() {
    showNextStage("newContainer6"); // Aller à la porte magique
});

document.getElementById("DemonOption")?.addEventListener("click", function() {
    const userAnswer = document.getElementById("enigmeAnswer").value.trim().toLowerCase(); // Conversion en minuscules et suppression des espaces
    const correctAnswer = "le feu" ;// La réponse correcte en minuscules

    if (userAnswer === correctAnswer) {
        showNextStage("newContainer7"); // Aller à la bataille contre le démon
    } else {
        alert("Mauvaise réponse. Essayez encore !"); // Afficher un message d'erreur
    }
});



// Gérer la bataille finale
document.getElementById("FinOption")?.addEventListener("click", function() {
    showNextStage("newContainer8"); // Afficher la victoire
});
