var function createProduct(productName, productDescription, productPrice, productColor, imgURL)
{
	var product = {};

	product.productName = productName;
	product.productDescription =productDescription;
	product.productPrice = productPrice;
	product.productColor = productColor;
	product.imgURL = imgURL;
}

createProduct('ball pen', '1mm', 3, 'black', 'image/');