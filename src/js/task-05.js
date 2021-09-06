const nameIn = document.querySelector("#name-output");
const nameOut = document.querySelector("#name-input");
nameOut.addEventListener("input", inputArea);
function inputArea(event) {
	let value = nameOut.value;
	if (value === "") {
		nameIn.textContent = "незнакомец";
	} else {
		nameIn.textContent = value;
	}
}
