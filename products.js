
 var function createProduct(productName, productDescription, productPrice, productColor, imgURL)

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

createProduct('MonteBlanc Gold Coated Fountain Pen', '18k Gold', 68,000, 'Gold, Silver', 'images/MPfountain pen.jpg');

createProduct('Cariter Jaguar Ballpoint Pen', 'Limited Edition Pen', 7,800, 'Silver, Black', 'images/CartierJaguar.jpg');

createProduct('Cartier Diamond Gold Fountain Pen', 'Limited Edition Pen', 5,600, 'Diamond, Gold,' 'images/CartierDiamond.jpg');

createProduct('Montegrappa Rollerball pen', '18k gold trim', 69,000, 'Gold', 'images/Montegrappa.jpeg');

createProduct('Montegrappa Ducale Black Rose Gold roller', 'Rose Gold Pen', 4,800, 'Rose Gold', 'images/MGDucale.jpg' );

createProduct('Gerber Survival Pen', 'Rugged Survival Pen', 7, 'Gray', 'images/Gerber.jpg');

createProduct('BIC ballpoint pen', 'Clear reliable pen', .25, 'clear, blue', 'images/BIC.jpg');

createProduct('BIC Economy pen', 'Plastic cheap pen', .25, 'green', 'images/BICEconomy.jpg');

