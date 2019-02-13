
class Produit{
	constructor(title, price){
		this.title = title;
		this.price = price;
	}
	commencePar(chaine){
		return this.title.startsWith(chaine);
	}
	plusPetitQue(price){
		return (this.price <= price);
	}
}

export {Produit};