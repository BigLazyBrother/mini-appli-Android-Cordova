var VueAjouterRepas = (function(){ //le var contient donc le retour de la fonction anonyme.
  pageAjouterRepas = document.getElementById("page-ajouter-repas").innerHTML;

  return function(actionAjouterRepas) {
    //on prend une référence sur une fonction
    //pour pouvoir faire un CALLBACK
    this.afficher = function(){ //afficher est une référence vers la fonction
      elementBody = document.getElementsByTagName("body")[0];
      elementBody.innerHTML = pageAjouterRepas;

      //comme on est dans une appli mobile, on n'a pas d'envoi du formulaire à un serveur.
      var formulaireAjouter = document.getElementById("formulaire-ajouter");
      formulaireAjouter.addEventListener("submit", enregistrer);

    }

    //méthode privée enregistrerRepas
    var enregistrer = function(evenement) {
      evenement.preventDefault(); //le formulaire ne sera pas soumis.

      var nom = document.getElementById("repas-nom").value;
      var region = document.getElementById("repas-region").value;
      var description = document.getElementById("repas-description").value;
      // ↑ le .value marche aussi pour les textArea ! (sugar synthaxique ?)
      //l'id on s'en fout pour l'affichage.

      var repas = new Repas(nom, region, description, null);
      //on met notre id à null. C'est pas la responsabilité
      //d'une vue de générer une id unique mais à une BDD (pas encore intégré)

      actionAjouterRepas(repas);
      //CALLBACK. On appelle un élément (fonction) d'une autre classe.
    }
  }
})();