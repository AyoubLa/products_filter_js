
class Produit{
	constructor(title, price){
		this.title = title;
		this.price = price;
	}
	contient(chaine){

		return this.title.toUpperCase().includes(chaine.toUpperCase());
	}
	plusPetitQue(price){

		return (this.price <= ((price === "")? Infinity : price));
	}
}

export {Produit};