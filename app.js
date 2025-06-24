const a = 10;

// if (true) {
// 	const b = 20;
// 	console.log(a);

// 	console.log(b);
// }

// console.log(a);
// console.log(b); // This will throw an error because 'b' is not defined outside the block

// for (let i = 0; i < 5; i++) {
// 	console.log(i);
// }

// console.log(i);

// if (true) {
// 	let b = 30;
// 	console.log(b);
// 	if (true) {
// 		const b = 40;
// 		console.log(b);
// 	}
// 	if (true) {
// 		console.log(b);
// 	}
// }

function getPasswordValue() {
	console.log("getPasswordValue called");
}

// getPasswordValue();
// getPasswordValue();
// getPasswordValue();
// getPasswordValue();
// getPasswordValue();
// getPasswordValue();

function getPasswordLegth(password = "") {
	console.log(password.length);
}

// getPasswordLegth("test1234");
// getPasswordLegth("234432234");
// getPasswordLegth("234432234234432234");

function getProductTotalPrice(price, quantity) {
	// console.log(price * quantity);

	return price * quantity;
}

let prod1Price = getProductTotalPrice(100, 2);
let prod2Price = getProductTotalPrice(100, 3);

let newFn = getProductTotalPrice;
// newFn(200, 4);

const myFn1 = function (functionName) {
	return functionName("test");
};

const myFn2 = (userName) => {
	console.log("test");
};

// myFn1(getPasswordLegth);
const items = data.items;
console.log(items);

const callbackFn = (element, index, array) => {
	console.log(`Element: ${element.productName}, Index: ${index}`, array);
	// console.log("Callback function executed");
};

items.forEach((element, index, array) => {
	// console.log(`Element: ${element.productName}, Index: ${index}`, array);
	// console.log("Callback function executed");
	// if (element.price === 1949) {
	// 	element.name = "test123";
	// }
});

console.log(items);

const filteredImtes = items.filter((element, index, array) => {
	return element.price > 1000 && element.price < 3000;
});

console.log(filteredImtes);

const findImtes = items.find((element, index, array) => {
	return element.price > 1000 && element.price < 3000;
});

console.log(findImtes);

const everyImtes = items.every((element) => {
	return element.storageQuantity > 100;
});

console.log(everyImtes);

const someImtes = items.some((element, index) => {
	return element.storageQuantity > 100;
});

console.log(someImtes);

const prices = items
	.map((element, index, array) => {
		return element.price;
		// return {
		// 	price: element.price,
		// 	image: element.imageUrl,
		// };
	})
	.filter((element) => {
		return element > 1000;
	});

console.log(prices);

const images = items.map((element) => {
	return `<img src="${element.imageUrl}"  alt="${element.productName}" class="product-image" />`;
});
console.log(images);
console.log(prices.includes(2000));
console.log(prices.includes(1949));

const objectPropertyNames = Object.keys(data);
console.log(objectPropertyNames);
const objectPropertyValues = Object.values(data);
console.log(objectPropertyValues);
const objectEntries = Object.entries(data);
console.log(objectEntries);
