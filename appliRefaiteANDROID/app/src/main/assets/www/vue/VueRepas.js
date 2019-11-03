var VueRepas = (function(){ //le var contient donc le retour de la fonction anonyme.
  pageRepas = document.getElementById("page-repas").innerHTML;

  return function(repas)
  {
    this.afficher = function(){ //afficher est une référence vers la fonction
      elementBody = document.getElementsByTagName("body")[0];
      elementBody.innerHTML = pageRepas;

      document.getElementById("repas-nom").innerHTML = repas.nom;
      document.getElementById("repas-region").innerHTML = repas.region;
      document.getElementById("repas-description").innerHTML = repas.description;
      //l'id on s'en fout pour l'affichage.

      document.getElementById("modifier-repas").innerHTML = '<a href="#modifier-repas/' + repas.id + '" class="bouton">Modifier le repas</a>';

    }
  }

})();