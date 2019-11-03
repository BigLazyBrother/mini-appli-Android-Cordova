var VueModifierRepas = (function(){ //le var contient donc le retour de la fonction anonyme.
  pageModifierRepas = document.getElementById("page-modifier-repas").innerHTML;

  return function(actionModifierRepas, repas) {
    //on prend une référence sur une fonction
    //pour pouvoir faire un CALLBACK
    this.afficher = function(){ //afficher est une référence vers la fonction
      elementBody = document.getElementsByTagName("body")[0];
      elementBody.innerHTML = pageModifierRepas;
      idRepas = repas.id;

      //comme on est dans une appli sur mobile, on n'a pas d'envoi du formulaire à un serveur.
      var formulaireModifier = document.getElementById("formulaire-modifier");

      //Pour rendre la page de mofication plus confortable, on place les valeurs courantes dans les champs lors de l'affichage de la page.
      document.getElementById("repas-nom").value = repas.nom;
      document.getElementById("repas-region").value = repas.region;
      document.getElementById("repas-description").innerHTML = repas.description;

      formulaireModifier.addEventListener("submit", enregistrer);

    }

    //méthode privée enregistrerRepas
    var enregistrer = function(evenement) {
      evenement.preventDefault(); //le formulaire ne sera pas soumis.

      var nom = document.getElementById("repas-nom").value;
      var region = document.getElementById("repas-region").value;
      var description = document.getElementById("repas-description").value;
      // ↑ le .value marche aussi pour les textArea ! (sugar synthaxique ?)
      //l'id on s'en fout pour l'affichage.

      var repas = new Repas(nom, region, description, idRepas);
      //POUR LA MODIFICATION, L'ID CONTIENT LA VALEUR DE L'ÉLÉMENT MODIFIÉ)

      actionModifierRepas(repas);
      //CALLBACK. On appelle un élément (fonction) d'une autre classe.
      //(en JS la confusion, c'est notre amie.)
    }
  }
})();