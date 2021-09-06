const ingredients = [
	"Картошка",
	"Грибы",
	"Чеснок",
	"Помидоры",
	"Зелень",
	"Приправы",
];

// const priceEl = document.getElementById("ingredients");
// const foodEl = ingredients.forEach((item) => {
// 	const items = document.createElement("li");
// 	items.innerHTML = item;
// 	priceEl.append(items);
// });

// console.log(priceEl);

const priceEl = document.querySelector("#ingredients");
const foodEl = (item) =>
	item.map((elem) => {
		const itemEl = document.createElement("li");
		itemEl.textContent = elem;
		return itemEl;
	});

priceEl.append(...foodEl(ingredients));
