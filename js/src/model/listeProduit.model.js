import {Produit} from './produit.model';

class ListeDeProduits{
	constructor(){
		this.produits = [];
	}
	ajouterProduit(produit){
		this.produits.push(produit);
	}
	afficherListeProduits(){
		return this.produits;
	}
	// Trie
	triDecroissant(){
		let tabProduits = this.afficherListeProduits();
		return tabProduits.sort().reverse();
	}
	triCroissant(){
		let tabProduits = this.afficherListeProduits();
		return tabProduits.sort();
	}
	trierProduit(ordre){
		if(ordre = "asc"){
			return this.triCroissant();
		}else if(ordre = "desc"){
			return this.triDecroissant();
		}
	}
	// Filtrage
	filtrerParnom(chaine){
		let tabProduits = this.afficherListeProduits();
		for (var i = 0; i < tabProduits.length; i++) {
			if (tabProduits[i].commencePar(chaine) === false) {
				tabProduits[i].splice(i,1);
			}
		}
		return tabProduits;
	}
	filtrerParPrix(prix){
		let tabProduits = this.afficherListeProduits();
		for (var i = 0; i < tabProduits.length; i++) {
			if (tabProduits[i].plusPetitQue(prix) === false) {
				tabProduits[i].splice(i,1);
			}
		}
		return tabProduits;
	}
	filtrerProduit(motif){
		if(motif === "nom"){
			this.filtrerParnom();
		}else if(motif === "prix"){
			this.filtrerParPrix();
		}
	}
}

export {ListeDeProduits};