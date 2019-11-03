//POJO
var Repas = function(nom, region, description, id){
	//ce code est la définition de la fonction mais sert aussi de constructeur
	//On peut donc écrire le code du constructeur en dehors d'une foncion
	//directement dans la classe.
	this.id = id;
	this.nom = nom;
	this.region = region;
	this.description = description;
}