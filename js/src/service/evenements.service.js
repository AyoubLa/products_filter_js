import {Affichage} from './affichage.service';
import {ListeDeProduits} from './../model/listeProduit.model';
import {products} from './../data/products';
import {Produit} from './../model/produit.model';

class Events{

	constructor(inputTitle, inputPrice, inputsOrdre, listeDeProduits, divProduits){

		this.inputTitle = inputTitle;
		this.inputPrice = inputPrice;
		this.inputsOrdre = inputsOrdre;
		this.divProduits = divProduits;
		this.listeDeProduits = listeDeProduits;
		this.ordre = "";
		this.motifDeFiltrage = "";
		
	}
	parseur(list){
		let lstProduits = new ListeDeProduits();
		for (var i = 0; i < list.length; i++) {
			
			let produit = new Produit(list[i].title, list[i].price);
			lstProduits.ajouterProduit(produit);
			
		}
		return lstProduits;
	}
	taperTitle(){
		this.inputTitle.addEventListener('input', (event) =>{

			
			let listeDeProduits = this.parseur(products.list);
			console.log(products.list);
			this.motifDeFiltrage = event.target.value;
			listeDeProduits.traitementsProduits(this.ordre, "title", this.motifDeFiltrage);
			console.log(listeDeProduits.afficherListeProduits());
			let afficheur = new Affichage(listeDeProduits.afficherListeProduits(), this.divProduits);
			afficheur.afficherProduits();
		});
		// return this.listeDeProduits;
	}
	taperPrice(){
		this.inputPrice.addEventListener('input', (event) =>{
			
			let listeDeProduits = this.parseur(products.list);
			console.log(products.list);
			this.motifDeFiltrage = Number.parseFloat(event.target.value);
			listeDeProduits.traitementsProduits(this.ordre, "price", this.motifDeFiltrage);
			console.log(listeDeProduits.afficherListeProduits());
			let afficheur = new Affichage(listeDeProduits.afficherListeProduits(), this.divProduits);
			afficheur.afficherProduits();
		});
		// return this.listeDeProduits;
	}
	cocherOrdre(){
		for (var i = 0; i < this.inputsOrdre.length; i++) {
			if (this.inputsOrdre[i].value === "asc") {
				this.inputsOrdre[i].addEventListener('change', (event) =>{
			
					let listeDeProduits = this.parseur(products.list);
					console.log(products);
					this.ordre = event.target.value;
					listeDeProduits.traitementsProduits(this.ordre, "", this.motifDeFiltrage);
					console.log(listeDeProduits.afficherListeProduits());
					let afficheur = new Affichage(listeDeProduits.afficherListeProduits(), this.divProduits);
					
					afficheur.afficherProduits();
				});
			}else{
				this.inputsOrdre[i].addEventListener('change', (event) =>{

					let listeDeProduits = this.parseur(products.list);
					console.log(products);
					this.ordre = event.target.value;
					listeDeProduits.traitementsProduits(this.ordre, "", this.motifDeFiltrage);
					console.log(listeDeProduits.afficherListeProduits());
					var afficheur = new Affichage(listeDeProduits.afficherListeProduits(), this.divProduits);

					afficheur.afficherProduits();
				});
			}
		}
		
		// return this.listeDeProduits;
	}


}

export {Events};