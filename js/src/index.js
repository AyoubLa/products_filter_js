import {products} from './data/products';
import {ListeDeProduits} from './model/listeProduit.model';
import {Affichage} from './service/affichage.service';
import {Events} from './service/evenements.service';
import '../../css/src/main.scss';

var inputTitle = document.getElementById('title');
var inputPrice = document.getElementById('price');
var inputsOrdre = document.querySelectorAll("input[type=radio]");
var divProduits = document.getElementById('produits');
const lstProduits = new ListeDeProduits();


for (var i = 0; i < products.list.length; i++) {
	
	lstProduits.ajouterProduit(products.list[i]);
	
}

var afficheur = new Affichage(lstProduits.afficherListeProduits(), divProduits);
afficheur.afficherProduits();
var events = new Events(inputTitle, inputPrice, inputsOrdre, lstProduits, divProduits);

events.cocherOrdre();
events.taperTitle();
events.taperPrice();