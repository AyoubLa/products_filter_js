import {products} from './data/products';
import {ListeDeProduits} from './model/listeProduit.model';
import {Affichage} from './service/affichage.service';


let divProduits = document.getElementById('produits');
let lstProduits = new ListeDeProduits();


for (var i = 0; i < products.list.length; i++) {
	lstProduits.ajouterProduit(products.list[i]);
	
}

let afficheur = new Affichage(lstProduits.trierProduit("desc"), divProduits);
afficheur.afficherProduits();