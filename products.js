function createProduct(productName, productDescription, productPrice, productColor, imgURL)
{
	var product = {};

	product.productName = productName;
	product.productDescription = productDescription;
	product.productPrice = productPrice;
	product.productColor = productColor;
	product.imgURL = imgURL;

	return product;
}



var monteBlanc = createProduct('MonteBlanc Gold Fountain Pen', '18k Gold', 68000, 'Gold Silver', 'images/MPfountain pen.jpg');

var cartierJaguar = createProduct('Cariter Jaguar Ballpoint Pen', 'Limited Edition Pen', 7800, 'Silver, Black', 'images/CartierJaguar.jpg');

var cartierDiamond =  createProduct('Cartier Diamond Gold Fountain Pen', 'Limited Edition Pen', 5600, 'Diamond Gold', 'images/CartierDiamond.jpg');

var montegrappaRoller = createProduct('Montegrappa Rollerball pen', '18k gold trim', 69000, 'Gold', 'images/Montegrappa.jpeg');

var montegrappaDucale = createProduct('Montegrappa Ducale Black roller', 'Rose Gold Pen', 4800, 'Rose Gold', 'images/MGDucale.jpg' );

var gerber = createProduct('Gerber Survival Pen', 'Rugged Survival Pen', 7, 'Gray', 'images/Gerber.jpg');

var bicBall = createProduct('BIC ballpoint pen', 'Clear reliable pen', 0.25, 'clear, blue', 'images/BIC.jpg');

var bicEconomy = createProduct('BIC Economy pen', 'Plastic cheap pen', 0.25, 'green', 'images/BICEconomy.jpg');


var listOfProducts = [monteBlanc, cartierJaguar, cartierDiamond, montegrappaRoller, montegrappaDucale, gerber, bicBall, bicEconomy]; //array of objects



var htmlBlock = "";
for(i=0;i<listOfProducts.length; i++)
{
	htmlBlock += `
	<div class="card">
		<ul>
			<li><img src="${listOfProducts[i].imgURL}"></li>
			<li>${listOfProducts[i].productName}</li>
			<li>${listOfProducts[i].productPrice}</li>
			<li>${listOfProducts[i].productColor}</li>
			<li>${listOfProducts[i].productDescription}</li>
		</ul>
	</div>`
}

document.write(htmlBlock);


