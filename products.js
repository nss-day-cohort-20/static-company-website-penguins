 var function createProduct(productName, productDescription, productPrice, productColor, imgURL)

function createProduct(productName, productDescription, productPrice, productColor, imgURL)
{
	var product = {};

	product.productName = productName;
	product.productDescription = productDescription;
	product.productPrice = productPrice;
	product.productColor = productColor;
	product.imgURL = imgURL;
}


var listOfProducts = [
var monteBlanc = createProduct('MonteBlanc Gold Coated Fountain Pen', '18k Gold', 68000, 'Gold, Silver', 'images/MPfountain pen.jpg'),

var cartierJaguar = createProduct('Cariter Jaguar Ballpoint Pen', 'Limited Edition Pen', 7800, 'Silver, Black', 'images/CartierJaguar.jpg'),

var CartierDiamond =  createProduct('Cartier Diamond Gold Fountain Pen', 'Limited Edition Pen', 5600, 'Diamond, Gold,' 'images/CartierDiamond.jpg'),

var montegrappaRoller = createProduct('Montegrappa Rollerball pen', '18k gold trim', 69000, 'Gold', 'images/Montegrappa.jpeg'),

var montegrappaDucale = createProduct('Montegrappa Ducale Black Rose Gold roller', 'Rose Gold Pen', 4800, 'Rose Gold', 'images/MGDucale.jpg' ),

var gerber = createProduct('Gerber Survival Pen', 'Rugged Survival Pen', 7, 'Gray', 'images/Gerber.jpg'),

var bicBall = createProduct('BIC ballpoint pen', 'Clear reliable pen', 0.25, 'clear, blue', 'images/BIC.jpg'),

var bicEconomy = createProduct('BIC Economy pen', 'Plastic cheap pen', 0.25, 'green', 'images/BICEconomy.jpg'),
];



var parentUl = document.getElementById("productList"); //selecting target <ul>
var nodeToAdd = document.createElement("li"); //create <li> tag
var text = document.createTextNode("listOfProducts[0]"); //create text to put inside <li>
nodeToAdd.appendChild(text); //appending text to li
parentUl.appendChild(nodeToAdd);//appending li to ul
