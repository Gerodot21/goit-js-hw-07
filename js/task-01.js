const itemEl = document.querySelectorAll(".item h2");
itemEl.forEach((item) =>
	console.log(
		`Категория: ${item.textContent}, Количестве элементов: ${item.nextElementSibling.children.length}`
	)
);
