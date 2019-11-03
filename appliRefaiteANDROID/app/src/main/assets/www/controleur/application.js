//On créé une classe anonyme autoexecutante, c'est comme le main de java
(function(){

	var daoRepas = null; //instancier n'est pas utile. sert juste à set à null au lieu de undefined

	//on va bricoler un constructeur
	//on n'a pas besoin de le mettre à la fin EN THÉORIE, le JS crée toutes les fonction lors du parsing du code
	//EN PRATIQUE, SI elle est EXECUTÉE AVANT la fin d'analyse du code, ce n'est pas vrai
	//Donc si elle est autoexecutante, ce n'est pas vrai.
	var initialiser = function(){
	//function initialiser(){
		window.addEventListener("hashchange",  naviguer);
		//naviguer est une fonction, mais on ne met pas de parenthèses, on va faire une référence
		daoRepas = new DAOrepas();
		naviguer();
		//on appelle naviguer par défaut.
	};

	//permet de naviguer selon la valeur de l'attribut
	var naviguer = function() {
		var hash = window.location.hash;

		var listeRepasDonnee = daoRepas.lister();

		if(!hash){ // le cas où href="#"
			// var listeRepasDonnee = daoRepas.lister(); //on récupere la liste depuis le DAO
			var listeVueRepas = new VueListeRepas(listeRepasDonnee);
			listeVueRepas.afficher();
		} else if(hash.match(/^#ajouter-repas/)) { //tout ce qui commence par "#ajouter repas"
			var ajouterVueRepas = new VueAjouterRepas(actionAjouterRepas);
			// ↑ on envoie la référence, on n'execute pas la fonction
			ajouterVueRepas.afficher();
		} else if(hash.match(/^#modifier-repas/)) { //tout ce qui commence par "#ajouter-repas"
			var navigation = hash.match(/^#modifier-repas\/([0-9]+)/);
			var idRepas = navigation[1];

			var modifierVueRepas = new VueModifierRepas(actionModifierRepas, listeRepasDonnee[idRepas]);
			// ↑ on envoie la référence, on n'execute pas la fonction
			modifierVueRepas.afficher();
		} else { //tout le reste
			var navigation = hash.match(/^#repas\/([0-9]+)/);
			// ^ : "commence par"
			// \/ : échappement de /, sinon délimiteur de l'expression régulière
			var idRepas = navigation[1];

			var repasVue = new VueRepas(listeRepasDonnee[idRepas]);
			repasVue.afficher();
		}
	}

	var actionAjouterRepas = function(repas) {
		daoRepas.ajouter(repas);
		window.location.hash = "#"; //on retourne à l'accueil.
	}

	var actionModifierRepas = function(repas) {
		daoRepas.modifier(repas);
		window.location.hash = "#"; //on retourne à l'accueil.
	}

	//Si le constructeur est autoexecutant, il se place ici.
	initialiser();

})();