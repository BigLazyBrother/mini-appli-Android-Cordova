var DAOrepas = function(){

	/*
	var listeRepas = [
		new Repas("nom1", "region1", "description1", 0),
		new Repas("nom2", "region2", "description2", 1),
		new Repas("nom3", "region3", "description3", 2)
		//on met 0, 1, 2 pour éviter de devoir placer une boucle dans le système.
	]; //stub, échafaud

	this.lister = function(){ //on fera repasDAO.lister() pour l'appeler
		return listeRepas;
	}

	this.ajouter = function(repas){
		repas.id = listeRepas.length; //ATTENTION ! NE SERT QUE POUR LE TEST !
		listeRepas.push(repas);
	}

	this.modifier = function(repas){
		//En JS, splice permet de retirer l'élément d'un array selon une id.
		//Mais pour l'instant, on n'a juste besoin de modifier un élément

		listeRepas[repas.id] = repas;
	}
	*/

	var listeRepas = null;
	var initialiser = function(){
		if(!listeRepas){
			//en JS, bcp de choses sont égales à FALSE. Ce n'est pas le cas d'un tableau vide.
			listeRepas = [];
		}
	}
	
	//On place nos données dans le localStorage (données enregistrées par le navigateur qui n'expirent pas.)
	this.lister = function(){
		if(localStorage['repas']){
			listeRepas = JSON.parse(localStorage['repas']);
		}

		for(position in listeRepas){
			var repas = new Repas(
				listeRepas[position].nom,
				listeRepas[position].region,
				listeRepas[position].description,
				listeRepas[position].id
				);
			listeRepas[position] = repas;
		}
		return listeRepas;
	}

	this.ajouter = function(repas){
		//C'est ici qu'il faut attribuer un id au repas
		if(listeRepas.length > 0) {
			repas.id = listeRepas[listeRepas.length-1].id + 1;
		} else {
			repas.id = 0;
		}

		listeRepas[repas.id] = repas;
		localStorage['repas'] = JSON.stringify(listeRepas);
		console.log("JSON.stringify(listeRepas) : " + JSON.stringify(listeRepas));
	}

	this.modifier = function(repas){
		for( i in listeRepas){
			if(listeRepas[i].id==repas.id){
				listeRepas[i]=repas;
			}
		}
		localStorage['repas'] = JSON.stringify(listeRepas);
	}

	initialiser();

}