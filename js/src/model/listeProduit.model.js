import {Produit} from './produit.model';

class ListeDeProduits{
	constructor(){
		this.produits = [];
	}
	ajouterProduit(produit){
		let prod = new Produit(produit.title, produit.price)
		this.produits.push(prod);
	}
	afficherListeProduits(){
		return this.produits;
	}
	definirListeProduits(listeProduits){
		this.produits = listeProduits;
	}
	// Trie
	triDecroissant(){
		let tabProduits = this.afficherListeProduits();
		for (var i = 0; i < tabProduits.length-1; i++) {
			let positionMax = i;
			for (var j = i+1; j < tabProduits.length; j++) {
				if (tabProduits[j].title > tabProduits[positionMax].title) {
					positionMax = j;
				}
			}
			let auxiliare = tabProduits[positionMax];
			tabProduits[positionMax] = tabProduits[i];
			tabProduits[i] = auxiliare;
		}
		return tabProduits;
	}
	triCroissant(){
		let tabProduits = this.afficherListeProduits();
		for (var i = 0; i < tabProduits.length-1; i++) {
			let positionMin = i;
			for (var j = i+1; j < tabProduits.length; j++) {
				if (tabProduits[j].title < tabProduits[positionMin].title) {
					positionMin = j;
				}
			}
			let auxiliare = tabProduits[positionMin];
			tabProduits[positionMin] = tabProduits[i];
			tabProduits[i] = auxiliare;
		}
		return tabProduits;
		
	}

	trierProduit(ordre){
		if(ordre === "asc"){
			return this.triCroissant();
		}else if(ordre === "desc"){
			return this.triDecroissant();
		}
	}
	// Filtrage
	filtrerParTitle(chaine){

		let tabProduits = this.afficherListeProduits();
		for (var i = 0; i < tabProduits.length; i++) {
			if (tabProduits[i].contient(chaine) === false) {
				
				tabProduits.splice(i,1);
				i--;
			}
		}
		return tabProduits;
	}
	filtrerParPrix(prix){
		let tabProduits = this.afficherListeProduits();
		for (var i = 0; i < tabProduits.length; i++) {
			if (tabProduits[i].plusPetitQue(prix) === false) {

				tabProduits.splice(i,1);
				i--;
			}
		}
		return tabProduits;
	}
	filtrerProduit(motif, valeur){
		if(motif === "title"){
			this.filtrerParTitle(valeur);
		}else if(motif === "price"){
			this.filtrerParPrix(valeur);
		}
	}

	traitementsProduits(ordreTrie, prixOrTitle, valeur){
		let tabProduits = this.afficherListeProduits();
		
		tabProduits = this.trierProduit(ordreTrie);
		tabProduits = this.filtrerProduit(prixOrTitle, valeur);
		return tabProduits;

	}
}

export {ListeDeProduits};