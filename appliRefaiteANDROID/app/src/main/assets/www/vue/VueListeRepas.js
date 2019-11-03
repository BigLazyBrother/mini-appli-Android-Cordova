var VueListeRepas = (function(){ //le var contient donc le retour de la fonction anonyme.
  pageListeRepas = document.getElementById("page-liste-repas").innerHTML;

  return function(listeRepasDonnee)
  {
    this.afficher = function(){ //afficher est une référence vers la fonction
      elementBody = document.getElementsByTagName("body")[0];
      elementBody.innerHTML = pageListeRepas;

      var listeRepas = document.getElementById("liste-repas");

      var texteLi="";
      for(var numeroRepas in listeRepasDonnee)
      {
          texteLi += '<li class="element"><a href="#repas/'+ listeRepasDonnee[numeroRepas].id + '">' +
          listeRepasDonnee[numeroRepas].nom +
          "</a></li>";
      }      
      listeRepas.innerHTML = texteLi;
    }
  }

})();