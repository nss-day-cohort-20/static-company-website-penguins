function createProduct(productName, productDescription, productPrice, productColor, imgURL)
{
	var product = {};

	product.productName = productName;
	product.productDescription =productDescription;
	product.productPrice = productPrice;
	product.productColor = productColor;
	product.imgURL = imgURL;
}

createProduct('ball pen', '1mm', 3, 'balck', 'image/cartierDiamond');

var parentUl = document.getElementById("productList");
var nodeToAdd = document.createElement("li");
var text = document.createTextNode('test');
nodeToAdd.appendChild(text);
parentUl.appendChild(nodeToAdd);
