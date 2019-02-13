

class Affichage{
	constructor(tableauDeProduits, divProduits){
		this.tableauDeProduits = tableauDeProduits;
		this.divProduits = divProduits;
	}

	afficherProduits(){
		for (var i = 0; i < this.tableauDeProduits.length; i++) {
			let divProduit = document.createElement('div');
			let divTitle = document.createElement('div');
			let divPrice = document.createElement('div');
			let textTitle = document.createTextNode(this.tableauDeProduits[i].title);
			let textPrice = document.createTextNode(this.tableauDeProduits[i].price);
			divTitle.appendChild(textTitle);
			divPrice.appendChild(textPrice);
			divProduit.appendChild(divTitle);
			divProduit.appendChild(divPrice);
			this.divProduits.appendChild(divProduit);
		}
	}
}

export {Affichage};