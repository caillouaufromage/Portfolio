/* CREATION ET APPELS DE LA FONCTION PROJET */

//  AFFICHER UN PROJET A L'ECRAN    //

function afficherProjet(logo, titre, lienSujet, lienRapport, lienProjet, binome, description, note, categories, photos) {
    var br = document.createElement("br");

    // Création de l'élément h3 pour le titre
    var titreElement = document.createElement("h3");

    // Création de l'élément de paragraphe pour les détails du projet
    var projetDetailsElement = document.createElement("div");
    projetDetailsElement.id = "projets";

    var indentElement = document.createElement("div");
    indentElement.id = "indent";

    // créations des catégories
    var categoriesContent = categories.map(category => `<p class="cate">${category}</p>`).join('');

    //création des photos
    var photosContent = photos.map(photo => `<img src="images/${photo}" class="catePhotos">`).join('');

    projetDetailsElement.innerHTML = `
    <div id="projetsMEP">
        <img src="${logo}" class="logoProjet">
        <div>
            <div class="inline-container">
                <h3>${titre}</h3>
                <p id="cateNote">${note}</p>
            </div>
            <p>${description}</p>
        
            <div class="NsautLigne">
                <p id="liensP"><a target="_blank" href="${lienSujet}" class="lien">&#128279; Sujet&nbsp; &nbsp;&nbsp; </a></p>
                <p id="liensP"><a target="_blank" href="${lienRapport}" class="lien">&#128279; Rapport&nbsp; &nbsp; &nbsp;</a></p>
                <p id="liensP"><a target="_blank" href="${lienProjet}" class="lien" download> &#128279; Projet</a></p>
            </div>  
    
            ${categoriesContent}
        </div>
    </div>
    <br>
        <div class="diaporama">
        ${photosContent}
        </div>
`;



    // Ajout des éléments créés à la structure existante
    var indentContent = document.querySelector(".indent_content");
    indentContent.appendChild(br);
    indentContent.appendChild(titreElement);
    indentContent.appendChild(projetDetailsElement);
    indentContent.appendChild(indentElement);
}

/* CLIQUER SUR UNE PHOTO */
document.addEventListener('DOMContentLoaded', function () {
    var body = document.querySelector('body');
    var isEnlarged = false; // Variable to track if an enlarged photo is currently displayed

    // Function to create an enlarged photo
    function createEnlargedPhoto(source) {

        // Désactiver tous les liens et autres éléments cliquables
        disableClickableElements();

        // Créer un nouvel élément image pour la photo agrandie
        var enlargedPhoto = document.createElement('img');
        enlargedPhoto.src = source;
        enlargedPhoto.classList.add('enlarged-photo');

        // Ajouter la classe bodyEnlargedPhoto au body
        body.classList.add('bodyEnlargedPhoto');

        // Ajouter le nouvel élément image au body
        body.appendChild(enlargedPhoto);

        // Mettre à jour la variable pour indiquer qu'une photo agrandie est actuellement affichée
        isEnlarged = true;

        // Gestionnaire d'événements pour les clics sur le document entier
        document.addEventListener('click', function closeEnlargedPhoto(event) {
            // Vérifier si le clic est en dehors de la photo agrandie
            if (!enlargedPhoto.contains(event.target)) {
                // Supprimer le nouvel élément image
                enlargedPhoto.remove();

                // Réactiver tous les liens et autres éléments cliquables
                enableClickableElements();

                // Retirer la classe bodyEnlargedPhoto du body
                body.classList.remove('bodyEnlargedPhoto');

                // Retirer le gestionnaire d'événements après avoir fermé la photo agrandie
                document.removeEventListener('click', closeEnlargedPhoto);

                // Mettre à jour la variable pour indiquer qu'aucune photo agrandie n'est actuellement affichée
                isEnlarged = false;
            }
        });
    }

    function disableClickableElements() {
        // On deseactive tous les elements cliquables (lorsque la photo est agrandie)
        var pageHtml = document.querySelectorAll('html');
        pageHtml.forEach(function (pageHtml) {
            pageHtml.style.pointerEvents = 'none';
        });
  
    }

    function enableClickableElements() {
        // On reactive tous les elements cliquables (lorsque la photo est de taille normale)
        var pageHtml = document.querySelectorAll('html');
        pageHtml.forEach(function (pageHtml) {
            pageHtml.style.pointerEvents = 'auto';
        });

        // Réactiver d'autres éléments cliquables selon votre structure HTML (ajuster au besoin)
        // var clickableElements = document.querySelectorAll('.your-clickable-class');
        // clickableElements.forEach(function (element) {
        //     element.style.pointerEvents = 'auto';
        // });
    }

    var photos = document.querySelectorAll('.catePhotos');
    photos.forEach(function (photo) {
        photo.addEventListener('click', function (event) {
            // Empêcher la propagation de l'événement pour éviter de déclencher le gestionnaire de clic du document
            event.stopPropagation();

            // Appeler la fonction pour créer la photo agrandie
            createEnlargedPhoto(this.src);
        });
    });
});




// Appel de la fonction avec les données

/* GEOMETRY DASH */
afficherProjet(
    "logos/logo_geometrydash.png",
    "Forest Quest",
    "documents/sujet_Geometrydash.pdf",
    "documents/rapport_ForestDash.pdf",
    "https://github.com/caillouaufromage/GeometryDashPFA",
    "En binôme avec Fabio ALVES",
    "GeometryDash-Like. On y joue un petit bonhomme qui doit avancer dans plusieurs niveaux à travers la jungle, tout en esquivant les pièges (piques, trous, saut mal calculé...). Menu de sélection des niveaux, animation du personnage et des décors. Implémentation de musiques et de sons.",
    "19/20",
    ["Programmation fonctionnelle Avancée", "Ocaml"],
    ["forestDash/fd1.JPG","forestDash/fd2.png","forestDash/fd3.png"]
);

/* BIOINFO GENES CANCER */
afficherProjet(
    "logos/logo_bioinfo.png",
    "Bioinformatique : Gènes et Cancer",
    "documents/biostatcancerpoumonV2.ipynb",
    "documents/biostatcancerpoumonV2.ipynb",
    "fichiers/BiostatCancerPoumon-main.zip",
    "seul",
    "On explore plusieurs dataset d'expressions géniques de patients atteints de cancer du poumon ou en bonne santé. L'objectif est de réaliser une analyse statistique afin de determiner un coefficient de correlation entre ces mêmes gènes et la présence ou non du cancer. Le code créé automatiquement plusieurs fichiers excels avec ces résultats.",
    "projet perso",
    ["Biostatistique", "Python", "Jupyter Notebook"],
    []
);

/* ETRE OU NE PAS ETRE */
    afficherProjet(
    "logos/logo_isd2.png",
    "Être ou ne pas être ?",
    "https://github.com/caillouaufromage/ISD2EtreOuNepasEtre",
    "", /* AJOUTER RAPPORT*/
    "fichiers/ISD2EtreOuNePasEtre.tar.gz",
    "En trinôme avec Nassim ARIFETTE et Justin MOUA",
    "Comment prédire la survie d'un patient pendant son séjour à l'hôpital compte tenu de son dossier médical ? Le personnel soignant collecte de nombreuses informations sur les patients qui sont très utiles pour surveiller l'état de santé, diagnostiquer et choisir les traitements. Elles peuvent également être utilisées pour l'analyse statistique prédictive.",
    "19,5/20",
    ["Data Science", "Python"],
    ["isd2/isd1.png", "isd2/isd2.png", "isd2/isd3.JPG"]
);


/* CALENDRIER INTERACTIF */
    afficherProjet(
        "logos/logo_ProgWeb.png",
        "Calendrier collaboratif",
        "documents/sujet_ProgWeb.pdf",
        "documents/rapport_ProgWeb.pdf",
        "https://github.com/caillouaufromage/CalendrierProgWeb",
        "en monôme",
        "Projet de l'option ProgWeb du second semestre de L3 Info. L'objectif est de coder un calendrier collaboratif accessible par plusieurs utilisateurs. Quelques fonctionnalités : page de connexion/inscription, bouton de déconnexion, navigation à travers les semaines du calendrier, création/modification de cours, un espace commentaire pour chaque cours, etc.",
        "14,5/20",
        ["Programmation web", "HTML", "CSS", "PHP", "JavaScript"],
        ["progweb/web1.png","progweb/web2.png","progweb/web3.png","progweb/web4.png"]
);


/* APPLICATION DE DESSIN PIIA */
    afficherProjet(
        "logos/logo_piia2.png",
        "Application de dessin",
        "documents/sujet_piia.pdf",
        "documents/rapport_piia.pdf",
        "https://github.com/caillouaufromage/PIIADrawingApp",
        "En binôme avec Thibaut GUERIN",
        "L'objectif est de créer une application de dessin facile à utiliser pour tous les niveaux d'utilisateurs, avec une interface utilisateur intuitive et bien conçue. Les fonctions principales telles que le dessin de formes géométriques pleines, le déplacement des formes, le changement de couleurs, le redimensionnement et le positionnement des formes au premier plan ou au dernier plan seront implémentées. Utilisation de SceneBuilder pour l'interface graphique.",
        "14,1/20",
        ["Programmation Interfaces Interactives Avancées", "Java", "JavaFX", "CSS"],
        ["piia/piia1.png","piia/piia3.png","piia/piia4.png"]
);


/* FROGGER */
    afficherProjet(
        "logos/logo_frogger2.png",
        "Frogger",
        "documents/sujet_Frogger.pdf",
        "documents/rapport_Frogger.pdf",
        "https://github.com/caillouaufromage/Frogger",
        "En binôme avec Nassim ARIFETTE",
        "Adaptation du jeu d'arcade Frogger. Une petite grenouille doit avancer le plus loin possible, tout en prenant gare aux nombreux dangers... Implémentation de différentes possibilités de Game Over: noyade et prédateur. Partie chronométrée avec affichage du score à la fin. Implémentation de sons.",
        "16/20",
        ["Programmation Objet", "Java"],
        ["frogger/frogger1.png","frogger/frogger2.png"]
    );

/* L'ILE INTERDITE */
    afficherProjet(
        "logos/logo_ileinterdite.png",
        "L'île interdite",
        "documents/sujet_IleInterdite.pdf",
        "documents/rapport_IleInterdite.pdf",
        "https://github.com/caillouaufromage/IleInterdite",
        "En binôme avec Nassim ARIFETTE",
        "Adaptation du jeu de société éponyme de Matt Leacock. Une équipe de 4 aventuriers arrive sur une île déserte. Ils doivent s'entraider afin de trouver tous les mystérieux artefacts que renferme ce lieu et s'échapper par hélicoptère au plus vite. Cependant le temps joue contre eux: l'eau monte et les dangers sont nombreux...",
        "20/20",
        ["Programmation Objet et Génie Logiciel", "Java"],
        ["IleInterdite/IleInterdite_carteCoffre.png", "IleInterdite/IleInterdite_Defaite.png", "IleInterdite/IleInterdite_gameplay.png", "IleInterdite/IleInterdite_carteDos.png", "IleInterdite/IleInterdite_carteExplorateur.png","IleInterdite/IleInterdite_cartePlongeur.png"]
    );
